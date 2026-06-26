console.log("Hello ")


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)


// boxes[3].style.backgroundColor="green";

// document.getElementById("red").style.backgroundColor="red";  // targeting the particular element by the id

// document.querySelector(".box").style.backgroundColor="blue";

// console.log(document.querySelectorAll(".box")).style.backgroundColor="blue";

// console.log(document.querySelectorAll(".box"))

// console.log(document.querySelectorAll(".box"));

// (document.querySelectorAll(".box")).forEach(e => {
//     e.style.backgroundColor = "blue";  // This will change the color of all the boxes

// });

// using the classical for loop
let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {

    boxes[i].style.backgroundColor = "blue";

}