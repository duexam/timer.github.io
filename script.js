function createHeart(){
    const h = document.createElement("div");
    h.classList.add("purple");

    h.style.left = Math.random()*90+"vw";

    h.style.animationDuration = Math.random()*2+6+"s";

h.innerText="B💜B";

document.body.appendChild(h);

setTimeout(()=>{
    h.remove();
},5000);

}
setInterval(createHeart , 80);



