// let retry = document.querySelector(".retry");
// let cancelIcon = document.querySelector(".icon");
// let show = document.querySelector(".snackbar");

let snackbar = document.querySelector(".snackbar-center");
let snackbarb = document.querySelector(".snackbar-bottom");
let snackbarl = document.querySelector(".snackbar-left");
let showbtn1 = document.getElementById("show-btn1");
let showbtn2 = document.getElementById("show-btn2");
let showbtn3 = document.getElementById("show-btn3");

let bool = true;

snackbar.style.visibility = "hidden";
snackbarb.style.visibility = "hidden";
snackbarl.style.visibility = "hidden";

showbtn1.addEventListener("click", () => {
  pop(snackbar);
});

showbtn2.addEventListener("click", () => {
  pop(snackbarb);
});

showbtn3.addEventListener("click", () => {
  pop(snackbarl);
});

function pop(snack) {
  snack.style.visibility = "visible";
  setTimeout(() => (snack.style.visibility = "hidden"), 2000);
}
