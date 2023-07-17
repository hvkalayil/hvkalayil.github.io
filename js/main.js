import { setTheme,toggleTheme, changePage } from "./theme";
import { loadWorks } from "./works";
import { loadCompetencies } from "./about";
import { loadExpAndAcad } from "./about/details";

function initialize(){
    setTheme()
    loadWorks()
    loadCompetencies()
    loadExpAndAcad()
}

// Theme toggler
document.querySelectorAll(".themeToggler").forEach(element => {
    element.addEventListener("click",toggleTheme)
});

// Page Changer
document.querySelectorAll(".actionButton").forEach(element => {
    element.addEventListener("click",changePage)
});

// Initializer
document.addEventListener("DOMContentLoaded",initialize)