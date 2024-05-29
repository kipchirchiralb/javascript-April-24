// DOM - Document Object Model
// This is a way in which javascript interacts with and manipulate web pages
// the DOM represents the html document in a tree structure(javascropt object) with methods and propreties to allow javascript access, modify and create elements on the page, dynamically changing content and behavior.


// Accessing elements
/**
 * document.getElementsByTagName(tagname)
 * document.getElementsByClassName(class)
 * document.getElementById(id)
 */

// Each element is an object with its own properties and methods to manipulate it(e.g. change text content, change inner html/children, add or remove or change attributes, styles, add event listeners,)

console.log( document.getElementsByTagName("p").length );


let myP = document.getElementById("testelement")

console.log(myP);
myP.style.backgroundColor = "green"
myP.textContent = "albert kipchirchir"

myP.setAttribute("class", "newp jjj uhfsu")

myP.addEventListener("click", funguaNav)

let count = 0

// hoisitng
function funguaNav(){
    count++
    console.log("Element clicked!!!! " + count + " times")
    //
    document.getElementById("modal").style.display= "block"
}


document.getElementById("close").addEventListener("click", ()=>{
    document.getElementById("modal").style.display= "none"
})