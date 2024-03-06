// Navigation
let list = document.querySelectorAll(".navigation li");

function setActiveLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");

  // Add logic to show corresponding page based on the selected menu item
  let pageId = this.dataset.page; // Assuming each navigation item has a "data-page" attribute
  showPage(pageId);
}

list.forEach((item) => {
  item.addEventListener("click", setActiveLink);
});

// Function to show the corresponding page based on the selected menu item
function showPage(pageId) {
  // Hide all pages
  let pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Show the selected page
  let selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
