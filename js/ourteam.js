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

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click',() =>{
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click',() =>{
    container.classList.remove("right-panel-active");
});