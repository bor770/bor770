let myImage = document.querySelector('img');
let images = ["pacman-150x147.jpg", "the_true_meaning_of_life_by_pacman.png", "med_1436103984_image.jpg", "imgp5481.jpg", "PacMan_Makeovers_2.jpg", "LG.jpg", "acb5ff405d4edcc7b6730ebbb10ac81c.jpg", "5804.jpg"];
myImage.setAttribute("src", "images/" + images[localStorage.getItem("myIndex")]);

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to The World of the Pac-Man, ' + myName + '!';
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to The World of the Pac-Man, ' + storedName + '!';
}
myButton.onclick = function() {
    setUserName();
}

if (!localStorage.getItem("myIndex")) {
    localStorage.setItem("myIndex", 0);
}
myImage.onclick = function() {
    localStorage.setItem("myIndex", (+ localStorage.getItem("myIndex") + 1) % 8);
    myImage.setAttribute("src", "images/" + images[localStorage.getItem("myIndex")]);
}

