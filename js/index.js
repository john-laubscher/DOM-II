// Your code goes here
//mouseover and mouseout change color             //works
const mouseOverColor = document.querySelector("h1")
mouseOverColor.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "gold";
});

mouseOverColor.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "white";
});

//Keydown with text size change              //works
const keyDown = document.querySelector("nav:nth-child(2)");
keyDown.addEventListener("keydown", function(event){
    event.target.style.fontSize = "350% !important";
    event.target.style.backgroundColor = "orange";
    console.log(event.target);
});

//onclick to text enlarge                          //works
const onClick = document.querySelector(".content-destination img") 
const bigFont = document.querySelector(".content-destination h2")

onClick.addEventListener("click", function(event) {
    bigFont.style.fontSize = "400%";
})

//doubleclick to enlarge                      //works
const dblClick = document.querySelector("header h2")

dblClick.addEventListener("dblclick", function(event){  
    event.target.style.fontSize = "400%";
})

//onload welcome to the fun bus makes grey        
const welcomeMsg = document.querySelector(".text-content h2");
console.log(welcomeMsg);
const bodyTag = document.querySelector("body")


// bodyTag.addEventListener("onload", onLoadFunction)
function onLoadFunction(event) {
    console.log(event.target);
    welcomeMsg.style.backgroundColor = "grey";
    console.log(welcomeMsg)
}

window.addEventListener('DOMContentLoaded', onLoadFunction, false); 



//text select colorchange                     //
const textSelect = document.querySelector(".destination p")

function colorSelection(event) {
const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
console.log(selection);
 selection.style.color = "orange"
}
textSelect.addEventListener('selectionchange', colorSelection)

//focus event used to turn nav Home red           //works
const focusEvent = document.querySelector("nav a")  

focusEvent.addEventListener("focus", focusFunction);

function focusFunction() {
    focusEvent.style.backgroundColor = "red";
}

// scroll event to make bigger                    //
document.querySelector(".text-content").addEventListener("wheel", scrollFunction);

function scrollFunction() {
    this.style.fontSize = "500%";
}

//









