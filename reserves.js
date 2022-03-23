let contenedor = document.getElementById("contenedor");
let flag = true;

contenedor.addEventListener("click", function (event) {

    if (flag == true) {

        if (event.target.classList.contains("img-fluid")) {

            event.target.src = "img/cinema2.png"
            flag = false
        }
    }
    else {
        if (event.target.classList.contains("img-fluid")) {

            event.target.src = "img/cinema-chair.png"
            flag = true
        }
    }
});
let etiquetaBoton = document.getElementById("button");
etiquetaBoton.addEventListener("click", escuchar);
function escuchar(event) {
    event.preventDefault();
    console.log("Clicked")
    let pelicula = document.getElementById("selectPelicula").value
    let asiento = document.getElementById("asiento").value
    let cantidad = document.getElementById("cantidad").value
    let age = document.getElementById("edad").value
    console.log("Película: " + pelicula + ", asiento: " + asiento + ", cantidad: " + cantidad + ", edad: " + age);

    if (age < 15) {
        console.log("menor")
        if (pelicula == "padrino") {
            alert("Esta película es exclusiva para mayores de 15 años");
        }
        else if (pelicula == "licoricePizza") {
            alert("Esta película es exclusiva para mayores de 15 años");
        } else if (pelicula == "batman" || pelicula == "uncharted" || pelicula == "princesa" || pelicula == "justiciero" || pelicula == "belfast" || pelicula == "libroAmor" || pelicula == "callejonAlmas" || pelicula == "swordArt") {
            let preferencial = 20000;
            let estandar = 12000;
            console.log(asiento)
            if (asiento == "preferencial") {
                let ressult = cantidad * preferencial
                console.log("entre aqui")
                alert("Su total es: " + ressult)
            }
            else {
                let ressult = cantidad * estandar
                console.log("entre a estandar")
                alert("Su total es de: " + ressult)
            };
        }
    } else {
        console.log("mayor")
        let preferencial = 20000;
        let estandar = 12000;
        if (asiento == "preferencial") {
            let ressult = cantidad * preferencial
            alert("Su total es: " + ressult)
        }
        else {
            let ressult = cantidad * estandar
            alert("Su total es de: " + ressult)
        };
    }

}

