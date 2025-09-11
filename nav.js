fetch('nav.html') .then(response => response.text()) .then(data => { document.getElementById('nav').innerHTML = data; });

function burguer(){
  const menuhamburguesa = document.querySelector(".menuhamburguesa")

  const navmenu = document.querySelector(".navmenu")
    menuhamburguesa.classList.toggle("active");
    navmenu.classList.toggle("active");
}


function despliegue() {
 
  var privadosmenu = document.getElementById("privadosmenu")
  var publicosmenu = document.getElementById("publicosmenu")

  if (privadosmenu.classList.contains ("activo")){
    privadosmenu.classList.remove ("activo");
    publicosmenu.classList.remove ("activo")
  }
  else { privadosmenu.classList.add ("activo");
    publicosmenu.classList.add ("activo")
      
  }
}