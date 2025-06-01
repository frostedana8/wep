window.onload = function(){
    fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });
}



//Programado a las 5am. Joder, si es que es cuando más productiva soy.
function cambiarTriangulo(seccion){
    var titulo = document.getElementById("tituloDatos" + seccion)
    if(titulo.innerHTML.slice(-1) == "▲"){
        titulo.innerHTML = titulo.innerHTML.replace("▲", "▼")
    }else if(titulo.innerHTML.slice(-1) == "▼"){
        titulo.innerHTML = titulo.innerHTML.replace("▼", "▲")
    }
}