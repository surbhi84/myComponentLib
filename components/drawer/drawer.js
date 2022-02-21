let menuBtn = document.querySelector(".icon");
let drawer = document.querySelector(".drawer-parent");
let cancelBtn = document.querySelector(".drawer-cancel");

console.log("hey");

menuBtn.addEventListener("click", viewDrawer);
cancelBtn.addEventListener("click", hideDrawer);

function hideDrawer() {
  drawer.classList.remove("in-view");
  drawer.classList.add("out-view");
  setTimeout(() => {
    drawer.style.visibility = "hidden";
  }, 600);
}

function viewDrawer() {
  drawer.style.visibility = "visible";

  drawer.classList.remove("out-view");
  drawer.classList.add("in-view");
}
