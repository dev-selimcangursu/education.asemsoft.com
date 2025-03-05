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

