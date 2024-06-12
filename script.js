let num = document.querySelectorAll(".box");
let number = document.querySelector("#number");
let red = document.querySelectorAll(".red")

let score = 3;
num.forEach((user) => {
  user.addEventListener("click", () => {
    user.classList.remove("hidden");

//  red.classList.remove("red")

red.forEach(event => {
    event.classList.remove("red")
})
     
 
 if (number.textContent > 0) {
      number.textContent -= 1;
    } else {
      number.textContent = 0;
     }
  });

  
  });

