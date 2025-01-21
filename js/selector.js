const selector = document.getElementById('selector'); 
const player1 = document.getElementById('player1');
const p1name = document.getElementById('p1name');

fetch("../info/characters.json")
.then(result => result.json())
.then(data => showCharacters(data))

document.addEventListener("keydown",(event) => {
    if(event.keyCode == 27){
        window.location.href = "selectMode.html";
    }
})

function showCharacters(characters){
    characters.forEach(character => {
        let characterElement = document.createElement('button');
        characterElement.setAttribute("class","character");
        characterElement.setAttribute("id",character.name);
        characterElement.style.backgroundImage = "url(../img/icons/"+character.name+".webp)";
        if(character.name == "shadowDio"){
            characterElement.setAttribute("activeP2","true");
        }
        

        selector.appendChild(characterElement)

        characterElement.addEventListener("click", () => {
            player1.style.backgroundImage = "url(../img/portraits/"+character.name+".png)";

            document.querySelectorAll(".character").forEach(element => {
                if(element.getAttribute("active") == "true"){
                    element.removeAttribute("active");
                }
            })

            characterElement.setAttribute("active","true");
            p1name.innerText = character.name;
        })
    });
}