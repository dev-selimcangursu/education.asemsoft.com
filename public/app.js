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
let offerOpen = document.getElementById("offerOpen");
let academicOpen = document.getElementById("academicOpen");
let childrenOpen = document.getElementById("childrenOpen");
let businessOpen = document.getElementById("businessOpen");

let academicCardArea = document.querySelector(".academic__card__area");
let trainingCardArea = document.querySelector(".training__card_area");
let childrenCardArea = document.querySelector(".children__card__area");
let businessCardArea = document.querySelector(".business__card__area");

offerOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "flex";
  offerOpen.style.color = "purple";
  academicCardArea.style.display = "none";
  childrenCardArea.style.display = "none";
  businessCardArea.style.display = "none";
});
academicOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  academicCardArea.style.display = "flex";
  academicOpen.style.color = "purple";
  childrenCardArea.style.display = "none";
  businessCardArea.style.display = "none";
});
childrenOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  academicCardArea.style.display = "none";
  childrenCardArea.style.display = "flex";
  childrenOpen.style.color = "purple";
  businessCardArea.style.display = "none";
});
businessOpen.addEventListener("click", function (e) {
  e.preventDefault();
  trainingCardArea.style.display = "none";
  academicCardArea.style.display = "none";
  childrenCardArea.style.display = "none";
  businessCardArea.style.display = "flex";
  businessOpen.style.color = "purple";
});
///
