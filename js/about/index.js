import jsonData from "./tech.json";

export function loadCompetencies() {
    let html = '';
    for (const item of jsonData) {
        html += `
        <img class="flex-col w-10 h-auto m-1 md:w-14 hover:scale-110" 
        src="${item.src}"
        alt="${item.alt}" title="${item.title}">
        `
    }

    document.getElementById('competencyContainer').innerHTML = html;
}
