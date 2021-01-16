var worksBtn = document.getElementById('worksBtn');
var aboutBtn = document.getElementById('aboutBtn');
var contactBtn = document.getElementById('contactBtn');
var themeBtn = document.getElementById('themeBtn');
var themeIcon = document.getElementById('themeIcon');
var myWorksPage = document.getElementById('myWorksPage');
var aboutMePage = document.getElementById('aboutMePage');
var contactMePage = document.getElementById('contactMePage');
var myAgeSlider = document.getElementById('myAge');
var myImage = document.getElementById('myImage');
var myAgeText = document.getElementById('myAgeText');
var style = document.documentElement.style;


worksBtn.addEventListener('click', function () {
    deactivateButtons(worksBtn, myWorksPage);
});

aboutBtn.addEventListener('click', function () {
    deactivateButtons(aboutBtn, aboutMePage);
});

contactBtn.addEventListener('click', function () {
    deactivateButtons(contactBtn, contactMePage);
});

themeBtn.addEventListener('click', function () {
    changeTheme();
});

myAgeSlider.addEventListener('input', function () {
    changeImage(myAgeSlider.value);
});


function deactivateButtons(activeButton, activePage) {
    worksBtn.className = 'navItem';
    aboutBtn.className = 'navItem';
    contactBtn.className = 'navItem';
    myWorksPage.style.display = 'none';
    aboutMePage.style.display = 'none';
    contactMePage.style.display = 'none';

    activePage.style.display = 'flex';
    activeButton.className = 'navItem active';
}


function changeTheme() {
    if (themeIcon.className == 'fas fa-moon') {
        style.setProperty('--primary', '#dee9ee');
        style.setProperty('--textColor', '#787879');
        style.setProperty('--sideBar', '#f7fdff');
        themeIcon.className = 'fas fa-sun';
    } else {
        style.setProperty('--primary', '#1A1C1E');
        style.setProperty('--textColor', '#D3DDE2');
        style.setProperty('--sideBar', '#222527');
        themeIcon.className = 'fas fa-moon';
    }
}

function changeImage(age) {
    switch (age) {
        case '7':
            myImage.src = "assets/4.png";
            break;
        case '12':
            myImage.src = "assets/3.png";
            break;
        case '17':
            myImage.src = "assets/2.png";
            break;
        case '22':
            myImage.src = "assets/1.png";
            break;

        default:
            break;
    }
    myAgeText.innerHTML = age;
}