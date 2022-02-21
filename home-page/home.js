let menuBtn = document.querySelector(".col-1-btn");
let column = document.querySelector(".col-1");

if (menuBtn.style.display == "none") column.classList.remove("display-none");
else column.classList.add("display-none");

menuBtn.addEventListener("click", viewColumn);
window.onresize = () => {
  console.log(menuBtn.style);

  if (window.screen.width >= 768) column.classList.remove("display-none");
  else column.classList.add("display-none");
};

window.onload = window.onresize;

function viewColumn() {
  if (column.classList.contains("display-none"))
    column.classList.remove("display-none");
  else column.classList.add("display-none");
}
