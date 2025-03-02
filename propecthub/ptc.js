//const hamburger = document.querySelector('.hamburger');
//const navLinks = document.querySelector('.nav-links');

//hamburger.addEventListener('click', () => {
  //navLinks.classList.toggle('active');
//});
document.getElementById("menuToggle").addEventListener("click", function () {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  navMenu.classList.toggle("active");
  menuIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
});

