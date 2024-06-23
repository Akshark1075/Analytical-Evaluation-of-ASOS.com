function prev() {
  document.getElementById("slider-container").scrollLeft -= 270;
}

function next() {
  document.getElementById("slider-container").scrollLeft += 270;
}

function toggleDisplay(evt) {
  let menu = document.getElementById("drop-menu");
  if (evt.target.children) {
    if (menu.style.display == "none") {
      evt.target.children[0].classList.remove("fa-angle-down");
      evt.target.children[0].classList.add("fa-angle-up");

      menu.style.display = "flex";
    } else {
      evt.target.children[0].classList.remove("fa-angle-up");
      evt.target.children[0].classList.add("fa-angle-down");
      menu.style.display = "none";
    }
  }
}

document.querySelectorAll("#sub-nav li.nav-item").forEach((link) =>
  link.addEventListener("mouseover", () => {
    let categoriesDiv = document.getElementById("nav-dropdown-container");

    categoriesDiv.style.display = "flex";
  })
);
document
  .querySelector("#nav-dropdown-container")
  .addEventListener("mouseleave", () => {
    console.log("left");
    let categoriesDiv = document.getElementById("nav-dropdown-container");

    categoriesDiv.style.display = "none";
  });
