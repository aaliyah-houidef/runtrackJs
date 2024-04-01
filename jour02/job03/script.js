const compteur= document.getElementById("compteur")
const button= document.getElementById("button")
let tchoupi = 0
function addOne(){
tchoupi +=1
const text = tchoupi
compteur.innerHTML = text;
}
button.addEventListener("click", ()=>{
addOne()
})
