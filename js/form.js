const = form = document.querySelector("form"),
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