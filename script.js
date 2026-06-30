/* ===========================
   BOOKWORM STUDY CLUB
   Premium JavaScript
=========================== */

// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.classList.add("hide");

},800);

});

// ======================
// CURSOR GLOW
// ======================

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ======================
// SCROLL PROGRESS BAR
// ======================

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

// ======================
// TYPING EFFECT
// ======================

const typing=document.getElementById("typing-text");

const words=[

"Premium Library",

"Peaceful Study Space",

"Inbuilt Café",

"Prayer Room",

"24×7 WiFi",

"Comfortable Cabins"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}

else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?40:90);

}

type();

// ======================
// COUNTER
// ======================

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target.toLocaleString();

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

// ======================
// REVEAL ON SCROLL
// ======================

const revealElements=document.querySelectorAll(".glass-card,.section-title");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

revealElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

revealObserver.observe(item);

});

// ======================
// MOBILE MENU
// ======================

const menu=document.getElementById("menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

// ======================
// SMOOTH NAV CLOSE
// ======================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

// ======================
// NAVBAR BACKGROUND
// ======================

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(7,17,31,.92)";

}

else{

navbar.style.background="rgba(7,17,31,.45)";

}

});

// ======================
// FLOATING PARTICLES
// ======================

for(let i=0;i<25;i++){

const dot=document.createElement("div");

dot.className="particle";

dot.style.left=Math.random()*100+"vw";

dot.style.animationDuration=5+Math.random()*10+"s";

dot.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(dot);

}
