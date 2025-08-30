fetch('nav.html') .then(response => response.text()) .then(data => { document.getElementById('nav').innerHTML = data; });

const menuhamburguesa = document.querySelector(".menuhamburguesa")

const navmenu = document.querySelector(".navmenu")

menuhamburguesa.addEventListener("click", () => {
  menuhamburguesa.classList.toggle("active")
  navmenu.classList.toggle("active")
}); 
