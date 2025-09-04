function muestra(art){
    var articulo = document.getElementById("ART"+art);
    var flechita = document.getElementById("FLECHITA"+art)
    console.log(articulo);
    articulo.classList.add("activo");
    flechita.classList.add("rotate-180")
}

