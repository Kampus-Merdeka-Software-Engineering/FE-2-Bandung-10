//Navbar Js
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
//End Navbar

//Slider Js
const myslide = document.querySelectorAll('.wrapper-main');
const dot = document.querySelectorAll('.dots');

let slideImage = 1;
slideMyImage(slideImage);
let timer = setInterval(autoSlide, 8000);

function autoSlide() {
	slideMyImage(slideImage += 1); //Autoslide
}
function resetSlide() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}
function plusSlides(x) {
	slideMyImage(slideImage += x);
	resetSlide(); //Next Slide
}
function currentSlide(x) {
	slideMyImage(slideImage += x);
	resetSlide(); //Prev Slide
}


function slideMyImage(x) {
	let y;
	for(y = 0;y<myslide.length;y++){
		myslide[y].style.display = "none";
	}
	for(y = 0;y<dot.length;y++) {
		dot[y].className = dot[y].className.replace(' active', '');
	}
	if(x > myslide.length){
	   slideImage = 1;
	   }
	if(x < 1){
	   slideImage = myslide.length;
	   }
	myslide[slideImage - 1].style.display = "block";
	dot[slideImage - 1].className += " active";
}
//End SLider