const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset_y = window.pageYOffset;
    parallax.style.backgroundSize = `${100 + offset_y * 0.05}%`;
});