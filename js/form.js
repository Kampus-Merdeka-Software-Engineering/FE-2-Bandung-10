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

const form = document.querySelector("form"),
        bookBtn = form.querySelector(".bookBtn"),
        resetBtn = form.querySelector(".resetBtn"),
        allinput = form.querySelectorAll(".first input");

bookBtn.addEventListener("click", ()=> {
    allinput.forEach(input => {
        if(input.value != ""){
            form.classList.add("secActive"); 
        }else{
            form.classList.remove("secActive");
        }
    })
})

bookBtn.addEventListener("click", () => form.classList.remove("secActive"));