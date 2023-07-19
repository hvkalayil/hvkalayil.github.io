import jsonData from "./tech.json";
import sections from "./journey.json";

export function loadCompetencies(year) {
    let html = '';
    for (const item of jsonData) {
        
        if (item.year > year) continue;

        html += `
        <img class="flex-col w-8 m-1 md:w-12 md:m-2 overflow-auto hover:scale-110" 
        src="${item.src}"
        alt="${item.alt}" title="${item.title}">
        `
    }
    document.getElementById('competencyContainer').innerHTML = html;
}

function getSection(year){
    for (const section of sections) {
        if(section.year.includes(year)){
            return section
        }
    }
}

function changePic(section){
    const imgSrc = section.image
    const img = document.getElementById("myPic")

    let src = img.src.split('/')
    src.pop()
    src.push(`${imgSrc}`)

    img.src = src.join('/')
}

function populateDetails(section) {
    document.getElementById("journeyDescription").innerHTML = section.description
    document.getElementById("journeyPoints").innerHTML = section.points
}

function showYear(section) {
    const yearStart = `${section.year[0]}`
    const yearLength = section.year.length

    let yearEnd = ''
    if (yearLength != 1) {
        yearEnd = `-${section.year[yearLength - 1] - 2000}`
    }

    document.getElementById("jounreyYearResult").innerHTML = yearStart+yearEnd
}

export function updateJourney(event) {
    const yearValue = event?.target?.value ?? '20230'
    const year = Math.ceil(parseInt(yearValue) / 10)

    // Find section
    const section = getSection(year)

    // Load Competency
    loadCompetencies(year)
    
    // Change Pic
    changePic(section)

    // Populate details
    populateDetails(section)

    // Show selected year
    showYear(section)
}