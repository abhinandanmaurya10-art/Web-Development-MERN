console.log("Hello World!")

// document.getElementById("red").style.backgroundColor="red"
// document.getElementById("green").style.backgroundColor="green"
// document.getElementById("yellow").style.backgroundColor="yellow"
// document.getElementById("pink").style.backgroundColor="pink"
// document.getElementById("blue").style.backgroundColor="blue"



let box = document.querySelectorAll(".box")

function getRandomColor(){
    let val1 =  Math.floor(Math.random() *256)
    let val2 =  Math.floor(Math.random() *256)
    let val3 =  Math.floor(Math.random() *256)

    return `rgb(${val1} ${val2} ${val3})`
}

box.forEach(box=>{
    box.style.color = getRandomColor()
    box.style.backgroundColor = getRandomColor()  
})


// For changing random color with time interval

// function changeColors() {
//     box.forEach((item) => {
//         item.style.color = getRandomColor();
//         item.style.backgroundColor = getRandomColor();
//     });
// }

// changeColors();

// setInterval(() => {
//     changeColors()
    
// }, 1000);
