// TOGGLE HAM & SNAV
const menuIcon = document.querySelector('#ham');
const snav = document.querySelector('#snav-container');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("is-active");
})
menuIcon.addEventListener("click", () => {
  snav.classList.toggle("is-active");
})
// CLOSE NAV AFTER CLICKING OUTSIDE




// TOGGLE ACCESSIBILITY MENU
const accessIcon = document.querySelector('#handie_icon');
const accessOpen = document.querySelector('#access_container');
const exitIcon = document.querySelector('#exit-ham')


accessIcon.addEventListener("click", () => {
  accessOpen.classList.toggle("is-active");
})
exitIcon.addEventListener("click", () => {
  accessOpen.classList.toggle("is-active");
})




/*
// HIDE ACCESSIBILITY MENU AFTER SCROLLING PAST 500PX
window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 1000){
      accessOpen.classList.add("disappear");
        return;
    }
    else{
      accessOpen.classList.remove("disappear");
    }
});
*/

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 768;
if ( w > targetWidth){
  alert('Screen size not yet supported, please use a mobile phone or tablet. Update soon!');
}
else{
}