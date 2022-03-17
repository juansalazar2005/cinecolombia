let contenedor = document.getElementById("contenedor")
contenedor.addEventListener("click", function (event) {


    if (event.target.classList.contains("img-fluid")) {

        event.target.src = "img/cinema2.png"

    }
})
