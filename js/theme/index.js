export function setTheme() {
    findExperience()
    const dIcon = document.querySelectorAll('#darkIcon');
    const lIcon = document.querySelectorAll('#lightIcon');
    dIcon.forEach(e => e.style.display = 'none')
    lIcon.forEach(e => e.style.display = 'none')
    if ((localStorage.theme === 'dark') || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#222527')
        dIcon.forEach(e => e.style.display = 'block')
        document.documentElement.classList.add('dark')
    } else {
        document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#f7fdff')
        lIcon.forEach(e => e.style.display = 'block')
        document.documentElement.classList.remove('dark')
    }

    setupActiveButton();
}

function findExperience() {
    const msInAYear = 365.25 * 24 * 60 * 60 * 1000

    const joiningDate = new Date('10/07/2021');
    const today = new Date()
    const experience = today - joiningDate

    const diff = (experience / msInAYear).toFixed(1)
    
    document.getElementById('exp').innerHTML = `Experience: ${diff} years`
}

function setupActiveButton() {
    const btnType = currentPage == 'worksPage' ? 'workBtn' : 'aboutBtn'
    const btn = document.getElementById(btnType);
    btn.classList.add('bg-accent-100')
    btn.classList.add('border-accent-900')
}

export function toggleTheme() {
    const currentTheme = localStorage.theme;
    localStorage.theme = currentTheme == 'dark' ? 'light' : 'dark';
    setTheme();
}

let currentPage = 'worksPage';
export function changePage(event) {
    const pageName = event.currentTarget.dataset.page

    const btnType = currentPage == 'worksPage' ? 'workBtn' : 'aboutBtn'
    const btn = document.getElementById(btnType);
    btn.classList.remove('bg-accent-100');
    btn.classList.remove('border-accent-900');

    // Transitioning
    const curr = document.getElementById(currentPage);
    const nxt = document.getElementById(pageName);

    curr.style.display = 'none';
    nxt.style.display = 'flex';

    nxt.classList.add('transit')
    setTimeout(() => {
        nxt.style.opacity = 1
    }, 800);
    currentPage = pageName;
}