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
//Navbar Js
let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }
//End Navbar