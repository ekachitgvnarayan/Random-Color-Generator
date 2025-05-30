let h1=document.querySelector("h1");
let btn=document.querySelector("button");
let div=document.querySelector("div");

function randomColor(){
    let x= Math.floor(Math.random()*255);
    return x;
}
//console.log()
btn.addEventListener("click",function(e){
    let color=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
    h1.innerText=color;
    div.style.backgroundColor=color;
    console.log(e);
})
// div.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;