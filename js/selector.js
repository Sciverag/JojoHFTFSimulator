const selector = document.getElementById('selector'); 
const player1 = document.getElementById('player1')

fetch("../info/characters.json")
.then(result => result.json())
.then(data => showCharacters(data))

function showCharacters(characters){
    characters.forEach(character => {
        let characterElement = document.createElement('div');
        characterElement.setAttribute("class","character");
        characterElement.setAttribute("id",character.name);
        characterElement.style.backgroundImage = "url(../img/icons/"+character.name+".webp)";

        selector.appendChild(characterElement)

        characterElement.addEventListener("click", () => {
            player1.style.backgroundImage = "url(../img/portraits/"+character.name+".png)";

            document.querySelectorAll(".character").forEach(element => {
                if(element.getAttribute("active") == "true"){
                    element.removeAttribute("active");
                }
            })

            characterElement.setAttribute("active","true");
        })
    });
}