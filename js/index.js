// Your code goes here
//mouseover and mouseout change color             //works
const mouseOverColor = document.querySelector("h1")
mouseOverColor.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "gold";
});

mouseOverColor.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "white";
});

//Keydown with text size change              //
const keyDown = document.querySelector("h4")

keyDown.addEventListener("keydown", function(event){
    event.target.style.fontSize = "350%";
});

//onclick to text enlarge                          //works
const onClick = document.querySelector(".content-destination img") 
const bigFont = document.querySelector(".content-destination h2")

onClick.addEventListener("click", function(event) {
    bigFont.style.fontSize = "400%";
})

//doubleclick to reduce                      //works
const dblClick = document.querySelector("header h2")

dblClick.addEventListener("dblclick", function(event){  
    event.target.style.fontSize = "400%";
})

//onload welcome to the fun bus gets big
const welcomeMsg = document.querySelector(".text-content h2");

welcomeMsg.addEventListener("load", onloadFunction);

function onloadFunction() {
    welcomeMsg.target.style.fontSize = "50px";
}

//text select colorchange
const textSelect = document.querySelector(".destination p")

function colorSelection(event) {
const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
 selection.style.color = "orange"
}
textSelect.addEventListener('select', colorSelection)

//focus event used to turn nav Home red
const focusEvent = document.querySelector("nav a")  ///works

focusEvent.addEventListener("focus", focusFunction);

function focusFunction() {
    focusEvent.style.backgroundColor = "red";
}

// scroll event to make bigger           //
document.querySelector(".text-content").addEventListener("wheel", scrollFunction);

function scrollFunction() {
    this.style.fontSize = "500%";
}

//









