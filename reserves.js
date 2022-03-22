let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function (event) {


    if (event.target.classList.contains("img-fluid")) {

        event.target.src = "img/cinema2.png"

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
        if (pelicula == "padrino") {
            alert("Esta película es exclusiva para mayores de 15 años");
        }
        else if (pelicula == "licoricePizza") {
            alert("Esta película es exclusiva para mayores de 15 años");
        }

    } else {
        let preferencial = 20000;
        let estandar = 12000;
        if (pelicula == "batman") {}
        if (asiento == "preferencial") {
            let ressult = cantidad * preferencial
            alert("Su total es: " + ressult)
        }
        else if (asiento == estandar); {
            let ressult = cantidad * estandar
        };
    }

}

  // if(age < 15) {
    //   if(pelicula == "padrino"){
      //      alert("Esta película es exclusiva para mayores de 15 años");
        //}
        //else if (pelicula == "licoricePizza") {
          //  alert("Esta película es exclusiva para mayores de 15 años");
        //}
    //}
//}

