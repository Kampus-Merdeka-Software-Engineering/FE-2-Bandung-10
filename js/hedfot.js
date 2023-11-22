// Navbar Start
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const BASE_URL = ''

if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
}

if (close) {
  close.addEventListener('click', () => {
      nav.classList.remove('active');
  });
}
//Navbar End

//Home Start

const slide = document.querySelectorAll(".wrapper-main");
const dot = document.querySelectorAll(".dots-main");

let swap = 1;
slideSwap(swap);

let time = setInterval(autoSwap, 8000);
function autoSwap() {
  slideSwap(swap += 1);
}

function nextSwap(a){
  slideSwap(swap += a);
  resetTime();
}

function prevSwap(a){
  slideSwap(swap = a);
  resetTime();
}

function resetTime() {
  clearInterval(time);
  time = setInterval(autoSwap, 8000)
}

function slideSwap(a) {
  let b;
  for (b = 0; b < slide.length; b++){
    slide[b].style.display = "none";
  }
  for (b = 0; b < dot.length; b++){
    dot[b].classList.remove(" active", "");
  }
  if (n > slide.length){
    swap = 1;
  }
  if (n < 1){
    swap = slide.length;
  }
  slide[swap - 1].style.display = "block";
  dot[swap - 1].className += " active";
}