const startButton = document.getElementById("startButton");
const gameLogo = document.getElementById("gameLogo");
const dioMenu = document.getElementById("dioMenu");
const jotaroMenu = document.getElementById("jotaroMenu");

startButton.addEventListener("click", () => {
    gameLogo.style.display = "none";
    dioMenu.style.display = "none";
    jotaroMenu.style.display = "none";
    startButton.style.display = "none";
    gameLogo.setAttribute("class","reverse");
    dioMenu.setAttribute("class","reverse");
    jotaroMenu.setAttribute("class","reverse");
    startButton.setAttribute("class","reverse");

    setTimeout(() => {
        gameLogo.style.display = "block";
        dioMenu.style.display = "block";
        jotaroMenu.style.display = "block";
        startButton.style.display = "block";
    }, 1)

    setTimeout(() => {
        window.location.href = "selectMode.html";
    }, 1000)
})