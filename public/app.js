// Sidebar Açma
document
  .getElementById("mobile-menu-icon")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let openSidebar = document.querySelector(".mobile-sidebar");
    if (openSidebar) {
      console.log("Sidebar Açıldı");
      openSidebar.classList.toggle("active");
    }
  });

// Sidebar Kapama
document
  .getElementById("close-sidebar-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let closeSidebar = document.querySelector(".mobile-sidebar");
    if (closeSidebar) {
      closeSidebar.classList.toggle("active");
    }
  });

// Home Slider
let currentIndex = 0;
let backImageButton = document.getElementById("backImageButton");
let nextImageButton = document.getElementById("nextImageButton");
let slides = document.querySelector(".slides");
let totalSlides = document.querySelectorAll(".slider").length;

nextImageButton.addEventListener("click", function (e) {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});

backImageButton.addEventListener("click", function (e) {
  currentIndex--;
  if (totalSlides >= currentIndex) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(${currentIndex * 33.33}%)`;
});

///
let bestSellerOpen = document.getElementById("bestSellerOpen");
let softwareOpen = document.getElementById("softwareOpen");

let companyOpen = document.getElementById("companyOpen");
let financeOpen = document.getElementById("financeOpen");

let softwareCardArea = document.querySelector(".software__card");
let trainingCardArea = document.querySelector(".best__seller");

let companyCardArea = document.querySelector(".company__card");
let financeCardArea = document.querySelector(".finance__card");

bestSellerOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "flex";
  bestSellerOpen.style.color = "#00264f";
  softwareCardArea.style.display = "none";
  companyCardArea.style.display = "none";
  financeCardArea.style.display = "none";
});
softwareOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  softwareCardArea.style.display = "flex";
  softwareOpen.style.color = "#00264f";
  companyCardArea.style.display = "none";
  financeCardArea.style.display = "none";
});
companyOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  softwareCardArea.style.display = "none";
  companyCardArea.style.display = "flex";
  companyOpen.style.color = "#00264f";
  financeCardArea.style.display = "none";
});
financeOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  softwareCardArea.style.display = "none";
  companyCardArea.style.display = "none";
  financeCardArea.style.display = "flex";
  financeOpen.style.color = "#00264f";
});
///
