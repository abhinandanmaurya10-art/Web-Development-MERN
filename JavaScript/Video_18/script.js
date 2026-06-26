console.log("Hey Hello World!")
console.log("How are you doing")

setTimeout(() => {
    console.log("I am inside the timeout.")
    
}, 0);
setTimeout(() => {
    console.log("I am inside the timeout 2 ")
    
}, 0);

console.log("The End")

const fn = ()=>{
    console.log("Nothing..")

}

const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}

const loadscript = (src, callback)=>{
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Abhinandan",fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

