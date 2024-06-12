let num = document.querySelectorAll(".box");
let number = document.querySelector("#number");
let clear = document.getElementById("mark");

num.forEach((user) => {
  user.addEventListener("click", () => {
    user.classList.remove("hidden");

    let redElement = user.querySelector(".red");
    if (redElement) {
      redElement.classList.remove("red");
    }

    if (number.textContent > 0) {
      number.textContent -= 1;
    } else {
      number.textContent = 0;
    }
  });
});

clear.addEventListener("click", function () {
  num.forEach((user) => {
    user.classList.remove("hidden");
  });
  document.querySelectorAll(".red").forEach((reds) => {
    reds.classList.remove("red");
  });
  number.textContent = 0
});
