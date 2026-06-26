let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("Hey I was clicked yeh!!")
    // document.querySelector(".box").innerHTML = "<b> Hey You are clicked</b> Enjoy your clicked!"
})

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by Right Click Please")
})


document.addEventListener("keydown",(e)=>{
    console.log(e)
})