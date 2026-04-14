const homepage = "./home.html";
const fade = 1600;

const panels  = Array.from(document.querySelectorAll(".panel"));

const countryselect = document.getElementById("country");
const countrybtn = document.getElementById("country-next");

const wifibtn = document.getElementById("wifi-next");
const finishbtn = document.getElementById("finish-setup");
const wifioptions = Array.from(document.querySelectorAll(".wifi-option"))

const statustext = document.getElementById("status-text")
const slothfade = document.getElementById("sloth-fade");

let selectedwifi = "";

function showstep(index) {
   panels.forEach((panel, i) => panel.classList.toggle("active", i===index))

}

countrybtn.addEventListener("click", () => {
    if(!countryselect.value) {
        statustext.textContent = "Please choose the contry.";
        return;
    }

    statustext.textContent = `Country set to ${countryselect.value}.`;
    showstep(1);
});

wifioptions.forEach((option) => {
    option.addEventListener("click", () => {
        wifioptions.forEach(o => o.classList.remove("selected"));
        option.classList.add("selected");
        selectedwifi = option.textContent;
        statustext.textContent = "";
    });
});

wifibtn.addEventListener("click", () => {
    if (!selectedwifi) {
        statustext.textContent = "Please choose a wifi network.";
        return;
    }
    
    statustext.textContent = `Connected to ${selectedwifi}...`;
    setTimeout(() => {
        showstep(2);
        statustext.textContent = "";
    }, 800);
});

finishbtn.addEventListener("click", () => {
    slothfade.classList.add("play");
    setTimeout(() => {
        window.location.replace(homepage);
    }, fade);
});






