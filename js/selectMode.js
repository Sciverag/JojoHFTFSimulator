const playButton = document.getElementById('playButton');
const comboButton = document.getElementById('comboButton');
const settingsButton = document.getElementById('settingsButton');
const leftBorder = document.getElementById('leftBorder');
const rightBorder = document.getElementById('rightBorder');
const locationText = document.getElementById('locationText');
const modeSelection = document.getElementById('modeSelection');
const splashArt = document.getElementById('splashArt');

playButton.addEventListener("click", () => {
    changeLoctaion("characterSelector.html");
})

comboButton.addEventListener("click", () => {
    changeLoctaion("characterInfo.html");
})

document.addEventListener("keydown",(event) => {
    if(event.keyCode == 27){
        changeLoctaion("menu.html");
    }
})

function changeLoctaion(url){
    leftBorder.style.display = "none";
    rightBorder.style.display = "none";
    locationText.style.display = "none";
    modeSelection.style.display = "none";
    splashArt.style.display = "none";
    leftBorder.setAttribute("reverse","reverse");
    rightBorder.setAttribute("reverse","reverse");
    locationText.setAttribute("class","reverse");
    modeSelection.setAttribute("class","reverse");
    splashArt.setAttribute("class","reverse");

    setTimeout(() => {
        leftBorder.style.display = "block";
        rightBorder.style.display = "block";
        locationText.style.display = "flex";
        modeSelection.style.display = "flex";
        splashArt.style.display = "block";
    },1)

    setTimeout(() => {
        window.location.href = url;
    }, 1000)
}