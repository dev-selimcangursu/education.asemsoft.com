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

//Trainings Slider

let nextTrainingButton =document.getElementById('nextTrainingButton');
let backTrainingButton =document.getElementById('backTrainingButton');
let totalTrainingSlider = document.querySelectorAll('.training__slider').length
let trainingIndex = 0
let trainings__slider__area = document.querySelector('.trainings__slider__area');


nextTrainingButton.addEventListener('click',function(e){
  e.preventDefault();
  trainingIndex++

  if(trainingIndex >= totalTrainingSlider)
  {
    trainingIndex=0;
  }

  trainings__slider__area.style.transform = `translateX(-${trainingIndex*14.28}%)`

})

backTrainingButton.addEventListener('click',function(e){
  e.preventDefault();
  trainingIndex--
  if(trainingIndex < 0) 
  {
    trainingIndex = totalTrainingSlider - 1; 
  }

  trainings__slider__area.style.transform = `translateX(-${trainingIndex * 14.28}%)`
})

