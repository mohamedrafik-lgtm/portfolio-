let homeItem = document.querySelector(".home-item");
let about = document.querySelector(".about");
let projets = document.querySelector(".projets");
let contact = document.querySelector(".contact");
let up = document.querySelector(".up")
homeItem.addEventListener("click" , () => {
window.scrollTo({
    top:0,
    behavior:"smooth"
})
});
about.addEventListener("click",()=>{
    window.scrollTo({
        top:800,
        behavior:"smooth"
    })
});
projets.addEventListener("click",()=>{
    window.scrollTo({
        top:1600,
        behavior:"smooth"
    })
});

up.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
});

contact.addEventListener("click",()=>{
    window.scrollTo({
        top:2550,
        behavior:"smooth"
    })
});

