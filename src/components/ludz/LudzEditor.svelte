<script lang="ts">
  type Alignment = "start" | "center" | "end" | "between" | "around";
  type VerticalAlignment = "start" | "center" | "end" | "stretch";

  type BlockType = "text" | "image" | "mixed";

  type Block = {
    id: string;
    type: BlockType;
    text?: string;
    imageUrl?: string;
    textAlign?: "left" | "center" | "right";
  };

  type Row = {
    id: string;
    align: Alignment;
    vAlign: VerticalAlignment;
    blocks: Block[];
  };

  type Page = {
    id: string;
    title: string;
    rows: Row[];
  };

  type Project = {
    name: string;
    pages: Page[];
  };

  // Cache the Tamil font data across exports, but always register it per-PDF
  let tamilFontBase64: string | null = null;

  const createId = () => crypto.randomUUID();

  let project: Project = {
    name: "Nursing Flash Cards",
    pages: [
      {
        id: createId(),
        title: "Page 1",
        rows: [
          {
            id: createId(),
            align: "center",
            vAlign: "center",
            blocks: [
              {
                id: createId(),
                type: "text",
                text: "என் வைரமே, நான் உன்னை மிகவும் நேசிக்கிறேன்.",
                textAlign: "center",
              },
            ],
          },
        ],
      },
    ],
  };

  let selectedPageId: string = project.pages[0]?.id;

  const alignmentClasses: Record<Alignment, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const verticalAlignmentClasses: Record<VerticalAlignment, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  function addPage() {
    const newPage: Page = {
      id: createId(),
      title: `Page ${project.pages.length + 1}`,
      rows: [],
    };
    project = { ...project, pages: [...project.pages, newPage] };
    selectedPageId = newPage.id;
  }

  function removePage(pageId: string) {
    if (project.pages.length === 1) return;
    const pages = project.pages.filter((p) => p.id !== pageId);
    project = { ...project, pages };
    if (!pages.find((p) => p.id === selectedPageId)) {
      selectedPageId = pages[0]?.id;
    }
  }

  function addRow(page: Page) {
    const newRow: Row = {
      id: createId(),
      align: "center",
      vAlign: "center",
      blocks: [
        {
          id: createId(),
          type: "text",
          text: "",
          textAlign: "center",
        },
      ],
    };
    page.rows = [...page.rows, newRow];
    project = { ...project, pages: [...project.pages] };
  }

  function removeRow(page: Page, rowId: string) {
    page.rows = page.rows.filter((r) => r.id !== rowId);
    project = { ...project, pages: [...project.pages] };
  }

  function addBlock(row: Row, type: BlockType) {
    const newBlock: Block = {
      id: createId(),
      type,
      text: type === "text" || type === "mixed" ? "" : undefined,
      imageUrl: type === "image" || type === "mixed" ? "" : undefined,
      textAlign: "center",
    };
    row.blocks = [...row.blocks, newBlock];
    project = { ...project, pages: [...project.pages] };
  }

  function removeBlock(row: Row, blockId: string) {
    if (row.blocks.length === 1) return;
    row.blocks = row.blocks.filter((b) => b.id !== blockId);
    project = { ...project, pages: [...project.pages] };
  }

  function handleImageSelect(event: Event, block: Block) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      block.imageUrl = e.target?.result as string;
      project = { ...project, pages: [...project.pages] };
    };
    reader.readAsDataURL(file);
  }

  async function ensureTamilFont(pdf: any) {
    try {
      if (!tamilFontBase64) {
        // Place a Tamil-capable TTF font at: public/assets/fonts/tamil.ttf
        const fontResponse = await fetch("/assets/fonts/tamil.ttf");
        if (!fontResponse.ok) {
          console.warn(
            "Tamil font not found at /assets/fonts/tamil.ttf; falling back to default font.",
          );
          return;
        }

        const fontBuffer = await fontResponse.arrayBuffer();
        const uint8Array = new Uint8Array(fontBuffer);
        let binary = "";
        for (let i = 0; i < uint8Array.length; i += 1) {
          binary += String.fromCharCode(uint8Array[i]);
        }
        tamilFontBase64 = btoa(binary);
      }

      // Always register the font on the current pdf instance
      pdf.addFileToVFS("Tamil.ttf", tamilFontBase64);
      pdf.addFont("Tamil.ttf", "Tamil", "normal");
      pdf.setFont("Tamil", "normal");
    } catch (e) {
      console.warn("Failed to load Tamil font; falling back to default font.", e);
    }
  }

  async function exportToPdf() {
    const { jsPDF } = await import("jspdf");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    await ensureTamilFont(pdf);

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    const rowGap = 16;
    const blockGap = 12;
    const rowHeight = 130;

    function addNewPage() {
      pdf.addPage();
    }

    project.pages.forEach((page, pageIndex) => {
      if (pageIndex > 0) {
        addNewPage();
      }

      let y = margin;

      for (const row of page.rows) {
        const blocks = row.blocks;
        if (!blocks.length) continue;

        const availableWidth =
          pageWidth - margin * 2 - blockGap * (blocks.length - 1);
        const blockWidth = availableWidth / blocks.length;

        // Track the tallest block in this row so we can move `y` correctly afterwards
        let effectiveRowHeight = rowHeight;

        for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];
          const x = margin + i * (blockWidth + blockGap);
          const hasImage = !!block.imageUrl;
          const hasText = !!block.text;

          // Estimate content height for this block
          const imageHeight = hasImage ? (hasText ? 60 : 90) : 0;
          let textHeight = 0;
          if (hasText && block.text) {
            const wrapped = pdf.splitTextToSize(block.text, blockWidth);
            const lineHeight = 14; // approximate line height in points
            textHeight = wrapped.length * lineHeight;
          }

          const spacingBetween = hasImage && hasText ? 6 : 0;
          const contentHeight = imageHeight + spacingBetween + textHeight;

          // If content is taller than the row box, fall back to top alignment
          if (contentHeight > effectiveRowHeight) {
            effectiveRowHeight = contentHeight;
          }

          // Compute vertical starting position based on row.vAlign, but clamp within the row box
          let baseY = y;
          if (contentHeight <= rowHeight) {
            if (row.vAlign === "center") {
              baseY = y + (rowHeight - contentHeight) / 2;
            } else if (row.vAlign === "end") {
              baseY = y + (rowHeight - contentHeight);
            } else {
              baseY = y; // start/stretch
            }
          } else {
            // Content taller than row box: always top-align to avoid clipping / negative offsets
            baseY = y;
          }

          let blockY = baseY;

          if (hasImage && block.imageUrl) {
            const format = block.imageUrl.startsWith("data:image/jpeg") ? "JPEG" : "PNG";

            try {
              pdf.addImage(block.imageUrl, format, x, blockY, blockWidth, imageHeight);
              blockY += imageHeight + spacingBetween;
            } catch {
              // Ignore image errors and continue
            }
          }

          if (hasText && block.text) {
            // Make sure we stay on the Tamil font before drawing text
            pdf.setFont("Tamil", "normal");
            pdf.setFontSize(11);
            let align: "left" | "center" | "right" = "left";
            if (block.textAlign === "center") align = "center";
            if (block.textAlign === "right") align = "right";

            const textX =
              align === "left"
                ? x
                : align === "center"
                ? x + blockWidth / 2
                : x + blockWidth;

            const wrapped = pdf.splitTextToSize(block.text, blockWidth);
            pdf.text(wrapped, textX, blockY, {
              maxWidth: blockWidth,
              align,
            });
          }
        }

        // Move to next row using the tallest block height we actually used
        y += effectiveRowHeight + rowGap;
      }
    });

    pdf.save(`${project.name || "flash-cards"}.pdf`);
  }

  $: selectedPage = project.pages.find((p) => p.id === selectedPageId) ?? project.pages[0];
</script>


<div class="flex min-h-[calc(100vh-4rem)] flex-col text-[#C8D2DC] font-sans">
  <header class="flex items-center justify-between border-b border-gray-800 bg-[#0A141E] px-6 py-4">
    <div class="flex flex-col">
      <label for="projectName" class="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Project Name</label>
      <input
        id="projectName"
        bind:value={project.name}
        class="w-64 border-b border-transparent bg-transparent text-lg font-medium outline-none transition-colors focus:border-blue-500 focus:bg-gray-800/50"
        placeholder="Untitled Project"
      />
    </div>
    <button
      on:click={exportToPdf}
      class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
    >
      Export to PDF
    </button>
  </header>

  <main class="flex flex-1 overflow-hidden bg-[#0A141E]/90">
    <!-- Sidebar -->
    <aside class="w-96 flex flex-col border-r border-gray-800 bg-[#0A141E] overflow-y-auto">
      
      <!-- Pages Section -->
      <div class="p-5 border-b border-gray-800">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-semibold text-gray-200">Pages</h2>
          <button on:click={addPage} class="text-xs text-blue-400 hover:text-blue-300 font-medium bg-blue-400/10 px-2 py-1 rounded">+ New Page</button>
        </div>
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {#each project.pages as page}
            <div class={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors cursor-pointer shrink-0 ${page.id === selectedPageId ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-transparent'}`} on:click={() => selectedPageId = page.id}>
              <input bind:value={page.title} class="w-20 bg-transparent outline-none focus:text-blue-200 placeholder-gray-500" placeholder="Page Name" on:click|stopPropagation />
              {#if project.pages.length > 1}
                <button class="opacity-50 hover:opacity-100 hover:text-red-400 transition-opacity" on:click|stopPropagation={() => removePage(page.id)}>✕</button>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- Rows Section -->
      {#if selectedPage}
        <div class="flex-1 p-5 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-sm font-semibold text-gray-200">Layout Rows</h2>
            <button on:click={() => addRow(selectedPage)} class="text-xs text-blue-400 hover:text-blue-300 font-medium bg-blue-400/10 px-2 py-1 rounded">+ Add Row</button>
          </div>

          {#if selectedPage.rows.length === 0}
            <div class="rounded-lg border border-dashed border-gray-700 p-6 text-center text-sm text-gray-500">
              No content yet. Create a row to begin.
            </div>
          {/if}

          <div class="flex flex-col gap-4">
            {#each selectedPage.rows as row, i}
              <div class="rounded-xl border border-gray-700/50 bg-[#0c1824] overflow-hidden shadow-sm">
                <div class="flex items-center justify-between bg-gray-800/40 px-4 py-2 text-xs">
                  <span class="font-medium text-gray-400">Row {i + 1}</span>
                  <div class="flex items-center gap-1">
                    <button class="text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded transition-colors" on:click={() => addBlock(row, "text")} title="Add Text">
                      📝 <span class="sr-only">Text</span>
                    </button>
                    <button class="text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded transition-colors" on:click={() => addBlock(row, "image")} title="Add Image">
                      🖼️ <span class="sr-only">Image</span>
                    </button>
                    <button class="text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded transition-colors" on:click={() => addBlock(row, "mixed")} title="Add Text+Image">
                      ✨ <span class="sr-only">Mixed</span>
                    </button>
                    {#if selectedPage.rows.length > 1}
                      <button class="text-gray-500 hover:text-red-400 hover:bg-red-400/10 p-1 rounded ml-1 transition-colors" on:click={() => removeRow(selectedPage, row.id)}>✕</button>
                    {/if}
                  </div>
                </div>

                <div class="p-4 space-y-4">
                  <!-- Row Alignments -->
                  <div class="flex gap-3 text-xs">
                    <div class="flex-1">
                      <label class="block mb-1.5 text-gray-400 font-medium">Horizontal</label>
                      <select bind:value={row.align} class="w-full rounded bg-gray-900 border border-gray-700 px-2 py-1.5 text-gray-300 outline-none focus:border-blue-500 transition-colors">
                        <option value="start">Left</option><option value="center">Center</option><option value="end">Right</option><option value="between">Space Between</option><option value="around">Space Around</option>
                      </select>
                    </div>
                    <div class="flex-1">
                      <label class="block mb-1.5 text-gray-400 font-medium">Vertical</label>
                      <select bind:value={row.vAlign} class="w-full rounded bg-gray-900 border border-gray-700 px-2 py-1.5 text-gray-300 outline-none focus:border-blue-500 transition-colors">
                        <option value="start">Top</option><option value="center">Middle</option><option value="end">Bottom</option><option value="stretch">Stretch</option>
                      </select>
                    </div>
                  </div>

                  <!-- Blocks -->
                  <div class="space-y-3">
                    {#each row.blocks as block, j}
                      <div class="relative rounded-lg border border-gray-700/50 bg-[#0A141E] p-3 shadow-sm group">
                        {#if row.blocks.length > 1}
                          <button class="absolute top-2 right-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" on:click={() => removeBlock(row, block.id)}>✕</button>
                        {/if}
                        
                        <div class="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          <span class="w-2 h-2 rounded-full bg-blue-500/50"></span>
                          {block.type} Block
                        </div>

                        {#if block.type === "text" || block.type === "mixed"}
                          <div class="mb-3">
                            <textarea bind:value={block.text} rows="2" class="w-full resize-none rounded bg-gray-900 border border-gray-800 p-2.5 text-sm text-[#C8D2DC] outline-none focus:border-blue-500 placeholder-gray-600 transition-colors" placeholder="Type text here..." />
                            <div class="mt-2 flex justify-end">
                              <select bind:value={block.textAlign} class="rounded bg-transparent text-xs text-gray-400 outline-none hover:text-gray-300">
                                <option value="left">Align Left</option>
                                <option value="center">Align Center</option>
                                <option value="right">Align Right</option>
                              </select>
                            </div>
                          </div>
                        {/if}

                        {#if block.type === "image" || block.type === "mixed"}
                          <div>
                            <label class="flex cursor-pointer flex-col items-center justify-center rounded border border-dashed border-gray-700 bg-gray-900 p-4 hover:border-blue-500 hover:bg-gray-800 transition-all">
                              {#if block.imageUrl}
                                <img src={block.imageUrl} alt="" class="max-h-24 object-contain mb-2 rounded" />
                                <span class="text-[10px] text-gray-400 bg-black/40 px-2 py-1 rounded-full">Click to change</span>
                              {:else}
                                <span class="text-2xl mb-2 text-gray-600">🖼️</span>
                                <span class="text-xs text-gray-500 font-medium">Upload Image</span>
                              {/if}
                              <input type="file" accept="image/*" class="hidden" on:change={(e) => handleImageSelect(e, block)} />
                            </label>
                          </div>
                        {/if}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </aside>

    <!-- Preview Area -->
    <section class="flex flex-1 flex-col p-6 md:p-8 overflow-y-auto items-center relative">
      <div class="absolute inset-0 bg-[#0A141E] opacity-50 z-0"></div>
      
      <div class="w-full max-w-[800px] mb-4 flex items-center justify-between text-gray-500 text-sm z-10">
        <span class="font-medium text-gray-300">Live Canvas Preview</span>
        <span class="px-2 py-1 bg-[#1a242e] rounded text-xs border border-gray-700">A4 Portrait Aspect</span>
      </div>

      <div class="w-full max-w-[800px] flex-1 rounded-sm shadow-2xl shadow-black/80 bg-white text-black min-h-[1131px] p-[40px] flex flex-col preview-canvas relative z-10 transition-all">
        {#if selectedPage}
          <!-- Page Header -->
          <div class="absolute top-4 left-4 text-[10px] text-gray-400 print:hidden">{project.name} - {selectedPage.title}</div>

          {#each selectedPage.rows as row}
            <div class={`flex w-full mb-4 ${alignmentClasses[row.align]} ${verticalAlignmentClasses[row.vAlign]} gap-4`}>
              {#each row.blocks as block}
                <div class="flex-1 flex flex-col gap-2 min-w-[120px]">
                  {#if block.type === "image" || block.type === "mixed"}
                    {#if block.imageUrl}
                      <img src={block.imageUrl} alt="" class="max-w-full max-h-48 object-contain mx-auto" />
                    {:else}
                      <div class="w-full h-24 bg-gray-50 flex items-center justify-center rounded border border-dashed border-gray-300 text-gray-400 print:hidden text-xs">
                        Image placeholder
                      </div>
                    {/if}
                  {/if}

                  {#if (block.type === "text" || block.type === "mixed")}
                    <div class="whitespace-pre-wrap text-sm text-gray-800" style={`text-align: ${block.textAlign ?? "center"}`}>{block.text || "Text placeholder"}</div>
                  {/if}
                </div>
              {/each}
            </div>
          {/each}
        {:else}
          <div class="flex h-full items-center justify-center text-gray-400">
            Select or create a page to view
          </div>
        {/if}
      </div>
    </section>
  </main>
</div>


<style>
  textarea {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
</style>


