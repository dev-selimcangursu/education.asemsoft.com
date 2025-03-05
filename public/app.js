// Sidebar Açma
document.getElementById("mobile-menu-icon").addEventListener("click", function (e) {
    e.preventDefault(); 
    let openSidebar = document.querySelector(".mobile-sidebar"); 
    if (openSidebar) {
      console.log('Sidebar Açıldı');
      openSidebar.classList.toggle("active");
    }
});

// Sidebar Kapama
document.getElementById("close-sidebar-button").addEventListener("click", function (e) {
e.preventDefault();

let closeSidebar = document.querySelector(".mobile-sidebar");
  if (closeSidebar) {
    closeSidebar.classList.toggle("active");
  } 
});


// Home Slider 
let currentIndex = 0;
let backImageButton = document.getElementById('backImageButton')
let nextImageButton = document.getElementById('nextImageButton')
let slides = document.querySelector('.slides')
let totalSlides =  document.querySelectorAll('.slider').length;

nextImageButton.addEventListener('click',function(e){
   currentIndex++
   if(currentIndex >= totalSlides)
   {
    currentIndex = 0;
   }
   
   slides.style.transform = `translateX(-${currentIndex*33.33}%)`
})

backImageButton.addEventListener('click',function(e){
   currentIndex--
   if(totalSlides >= currentIndex)
   {
    currentIndex = 0;
   }
   
   slides.style.transform = `translateX(${currentIndex*33.33}%)`
})

