let star = document.getElementById("star");
let moon = document.getElementById("moon");
let text = document.getElementById("text");

window.addEventListener("scroll", function(){
    let offset_y = window.scrollY;
    // star.style.top = `${offset_y * 2}px%`;
    moon.style.top = `${offset_y * 2}px`;
});