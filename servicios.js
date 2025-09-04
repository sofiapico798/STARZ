function muestra(art){
    var articulo = document.getElementById("ART"+art);
    var flechita = document.getElementById("FLECHITA"+art);
    if(flechita.classList.contains("rotate-180")){
        articulo.classList.remove("activo");
        flechita.classList.remove("rotate-180");
    }else{
        articulo.classList.add("activo");
        flechita.classList.add("rotate-180");
    }
}

