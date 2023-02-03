// Navbar
let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector(".menuToggle");


menuToggle.onclick= function(){
    header.classList.toggle('open');
}

// typing animation ///////////
var typed = new Typed('.typing',{
    strings: [" ","IT IS THE DESIGN AND EXCEUTION  <br> OF LETTERING WITH  A PEN INK BRUSH, <br> OR OTHER WRITING MATERIALS"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

