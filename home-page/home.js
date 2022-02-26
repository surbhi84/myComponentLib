let menuBtn = document.querySelector(".col-1-btn");
let column = document.querySelector(".col-1");

let initialScreenSize = -1;

// creating debounce function which will return a debounced function
function debounce(toBeDebounced, delay) {
  let timer;
  return function (...x) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      toBeDebounced(...x);
    }, delay);
  };
}

// a function which checks if the resize should bring the column back in screen or let it stay hidden
function columnHideOnresize() {
  console.log(window.innerWidth);
  if (
    (initialScreenSize <= 786 && window.innerWidth >= 786) ||
    (initialScreenSize >= 786 && window.innerWidth <= 786)
  ) {
    if (window.innerWidth >= 768) column.classList.remove("display-none");
    else {
      column.classList.add("display-none");
    }
    initialScreenSize = window.innerWidth;
  }
}

// creating a debounced version of the above function with our debounced function
let debouncedColumnHideOnresize = debounce(columnHideOnresize, 1000);

if (menuBtn.style.display == "none") column.classList.remove("display-none");
else column.classList.add("display-none");

menuBtn.addEventListener("click", viewColumn);

// onload fires on loading of the document
window.onload = () => {
  initialScreenSize = window.innerWidth;
  if (window.innerWidth >= 768) column.classList.remove("display-none");
  else {
    column.classList.add("display-none");
  }
};

// onresize event fires on resize of the window so whenever the innerwidth i.e available space in the window is greater then 768px the colum will appear and vice versa.
window.onresize = () => {
  debouncedColumnHideOnresize();
};

function viewColumn() {
  if (column.classList.contains("display-none"))
    column.classList.remove("display-none");
  else column.classList.add("display-none");
}
