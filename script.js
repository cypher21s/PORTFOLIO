// var tl = gsap.timeline({scrollTrigger:{
//     trigger: ".part-2",
//     start: "0% 95%",
//     end: "70% 50%",
//     scrub: true,
//     // markers: true,
// }})

// tl.to(".strip",{
//     marginLeft: "-30%",
// })
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 10+"px"
    crsr.style.top = dets.y + 10+"px"
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.from("#navi", {
    scrollTrigger:{
        trigger: "#back",
        start: "60% 50%",
        end: "150% 150%",
        scrub: 2,
        // markers: true
    },
    y:20,
    opacity: 0,
    duration: 1
})
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "50% 50%",
    end: "100% 50%",
    // scrub: true,
    pin: true,
    // markers: true,
}})

tl2.to(".text-part-2",{
    top: "10vh",
})
var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})
tl3.to(".cntr-cir",{
    width: "200vw",
    height: "300vw",
 })
tl3.to(".cntr-cir h1",{
    opacity: "1",
 })














 

// project image
var elemC = document.querySelector("#eff")
var fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mousemove",function(){
   fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
 })
var elems = document.querySelectorAll(".sText")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})




// button hover
var butt = document.querySelector("#btnsm")
var butth1 = document.querySelector("#btnsm h1")
butt.addEventListener("mousemove",function(){
    butt.style.backgroundColor = "white";
    butth1.style.color = "black"
})
butt.addEventListener("mouseleave",function(){
    butt.style.backgroundColor = "Initial";
    butth1.style.color = "rgb(165,165,165)"
})

document.querySelector("#navi")
.addEventListener("click", function(){
    document.querySelector("#menubar").style.left = "80%"
})

document.querySelector("#close")
.addEventListener("click", function(){
    document.querySelector("#menubar").style.left = "150%"
})



// text rotate
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("text-container");
    const text = "SATYAM - designer - developer - ";
    const angleIncrement = 360 / text.length;

    for (let i = 0; i < text.length; i++) {
      const characters = document.createElement("div");
      characters.innerText = text[i];
      characters.classList.add("text-character");
      characters.style.transform = `rotate(${i * angleIncrement}deg)`;
      textContainer.appendChild(characters);
    }
  });