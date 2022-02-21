let menuBtn = document.querySelector(".col-1-btn");
let column = document.querySelector(".col-1");

if (menuBtn.style.display == "none") column.classList.remove("display-none");
else column.classList.add("display-none");

menuBtn.addEventListener("click", viewColumn);

// onresize event fires on resize of the window so whenever the innerwidth i.e available space in the window is greater then 768px the colum will appear and vice versa.
window.onresize = () => {
  console.log(window.innerWidth);
  if (window.innerWidth >= 768) column.classList.remove("display-none");
  else {
    column.classList.add("display-none");
  }
};
// the same function will be fired on onload as onresize
window.onload = window.onresize;

function viewColumn() {
  if (column.classList.contains("display-none"))
    column.classList.remove("display-none");
  else column.classList.add("display-none");
}
