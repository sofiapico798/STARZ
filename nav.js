fetch('nav.html') .then(response => response.text()) .then(data => { document.getElementById('nav').innerHTML = data; });

function burguer(){
  const menuhamburguesa = document.querySelector(".menuhamburguesa")

  const navmenu = document.querySelector(".navmenu")
    menuhamburguesa.classList.toggle("active");
    navmenu.classList.toggle("active");
}

