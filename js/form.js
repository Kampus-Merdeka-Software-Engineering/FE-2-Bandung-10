//Navbar Js
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const BASE_URL = "";

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
//End Navbar

// const form = document.querySelector("form"),
//         bookBtn = form.querySelector(".bookBtn"),
//         allinput = form.querySelectorAll(".first input");

// bookBtn.addEventListener("click", ()=> {
//     allinput.forEach(input => {
//         if(input.value != ""){
//             document.getElementById("myModal").style.display = "flex";
//         }else{
//             form.classList.remove("secActive");
//         }
//     })
// })

// bookBtn.addEventListener("click", () => form.classList.remove("secActive"));
// Function hamburger button

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const rooms = document.getElementById("rooms").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const adults = document.getElementById("adults").value;
  const childs = document.getElementById("childs").value;
  // const address = document.getElementById("address").value;

  // Check if all fields are filled
  if (
    fullname !== "" &&
    email !== "" &&
    phone !== "" &&
    rooms !== "" &&
    checkin !== "" &&
    checkout !== "" &&
    adults !== "" &&
    childs !== ""
    // address !== ""
  ) {
    // Show modal
    document.getElementById("myModal").style.display = "flex";
  } else {
  }
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
});

document.getElementById("nextModalBtn").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModal2").style.display = "flex";
});

document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "/index.html";
});
