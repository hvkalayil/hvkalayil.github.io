import jsonData from './works.json'
import techData from '../about/tech.json'

export function loadWorks() {

    let html = '';
    let iconsHtml = '';
    let openInNewTab = '';
    let index = 0;
    const worksPage = jsonData

    for (const item of worksPage.reverse()) {
        openInNewTab = setNewTabSvg(item?.link ?? '')
        iconsHtml = setIcons(item?.icons ?? [])

        html += `
        <div class="card-container">
            <div id="scrollable${index}" class="card projectCard">
            <!-- Heading -->
            <div class="heading">
                <a class="mt-2" target="_blank"
                href="${item.link}">
                <h2
                    class="flex my-1 text-xl font-bold transition text-accent-900 hover:decoration-2 items-center">
                    ${item.name} &nbsp;
                    ${openInNewTab}
                </h2>
                </a>
                <img class="projectImage work-img w-full aspect-video" src="assets/projects/${item.imgPath}.png" alt="${item.name} Overview" />
                <div class="flex flex-row mt-2">
                    ${iconsHtml}
                </div>
            </div>

            <!-- Description -->
            <div class="details tracking-wide text-ellipsis">
                ${item.description}
            </div>

            </div>
        </div>`;
        index += 1;
    }
    document.getElementById('worksPage').innerHTML = html;

    document.querySelectorAll(".projectCard").forEach(element => {
        element.addEventListener("mouseleave",triggerScrollReset)
    });
    document.querySelectorAll(".projectImage").forEach(element => {
        element.addEventListener("mouseover",showGif)
        element.addEventListener("mouseleave",hideGif)
    });
}

function setNewTabSvg(link) {
    return link == '' ? '' : `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>`
}

function setIcons(ico) {
    let icoHtml = '';
    for (const icoName of ico) {
        const tech = techData.find((e) => e.title == icoName)
        icoHtml += `
            <div class="flex w-8 p-1 items-center overflow-auto hover:scale-110">    
                <img src="${tech.src}" alt="${tech.alt}" title="${tech.title}">
            </div>
        `
    }
    return icoHtml
}

function triggerScrollReset(event) {
    event.fromElement.scrollTop = 0;
}

function showGif(event) {
    const obj = event.srcElement
    obj.src = obj?.src?.replace('png', 'gif') ?? ''
}

function hideGif(event) {
    const obj = event.srcElement
    obj.src = obj.src.replace('gif', 'png')
}