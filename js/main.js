import { setTheme,toggleTheme, changePage } from "./theme";
import { loadWorks } from "./works";
import { loadCompetencies,updateJourney } from "./about";
import { loadExpAndAcad } from "./about/details";

function initialize(){
    setTheme()
    loadWorks()
    loadExpAndAcad()
    updateJourney()
}

// Theme toggler
document.querySelectorAll(".themeToggler").forEach(element => {
    element.addEventListener("click",toggleTheme)
});

// Page Changer
document.querySelectorAll(".actionButton").forEach(element => {
    element.addEventListener("click",changePage)
});

// Journey Tracker
document.getElementById("journey").addEventListener("input",updateJourney)

// Initializer
document.addEventListener("DOMContentLoaded",initialize)