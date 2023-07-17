import academics from "./academics.json";
import experience from "./experience.json";

export function loadExpAndAcad(){loadData("EXP"),loadData("ACAD")}

function loadData(type) {
    const data = type == 'EXP' ? experience : academics
    const entity = type == 'EXP' ? 'workExperience' : 'academicQualifications'
    let html = '';
    for (const item of data) {
        let linkHead = '';
        if(item?.link ?? true != true){                
            linkHead = `
            <span class="transition-transform transit duration-500 mt-4">
                <a href="assets/cert/${item.link}.pdf" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                </a>
            </span>`
        }

        let iconHtml = ''
        if(item?.body){
            iconHtml = `
            <span id="${item.id} down" class="transition-transform transit duration-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            `
        }
        
        html += `
        <div ${item?.body ? 'id="expandPanel"' : ''} data-panelName="${item.id}"  class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0">
            <div class="flex-col w-11/12">
                <div class="exp-ball hover:scale-105 transition"> </div>
                <h3 class="text-md md:text-lg font-extrabold"> ${item.first} </h3>
                <h4 class="font-bold"> ${item.second} </h4>
                <h5> ${item.third} </h5>

                <div id="${item.id}" class="flex flex-col w-full pl-4 py-4" style="display:none">
                    ${item.body}
                </div>
            </div>
            <div class="flex flex-col justify-start">
                ${iconHtml}
                ${linkHead}
            </div>
        </div>
        `
    }
    document.getElementById(entity).innerHTML = html;
    document.querySelectorAll("#expandPanel").forEach(element => {
        element.addEventListener("click",openDetail)
    });
}

function openDetail(event) {
    const element = document.getElementById(event.currentTarget.dataset.panelname)
    const iconDown = document.getElementById(`${element.id} down`)

    let style = element.style.display
    style = style == '' ? 'none' : style

    if (style == 'none'){
        element.style.display = 'flex'
        iconDown.style.transform = 'rotate(180deg)'
    } else {
        element.style.display = 'none'
        iconDown.style.transform = 'rotate(0deg)'
    }
}