"use strict";
//Primero generaremos un evento de ventana donde al cargar la página se ejecutará la función
window.addEventListener("load", function () {
     // Posteriormente cogeremos  el botón por su id perteneciente al html y crearemos un evento de ratón, donde al hacer clik se ejecutará la función
    document.getElementById("boton").addEventListener("click", function () {
         // creamos un nuevo objeto XMLHttpRequest y la guardamos en la variable json
        let json = new XMLHttpRequest();

        // json.onload se activa cuando se termina de cargar la página donde ejecutaremos la función
        json.onload = procesarRespuesta;

        function procesarRespuesta() {
            
            let respuesta = json.responseText;
            // comprobamos el contenido de respuesta x la consola
            //console.log(respuesta);


            // cogemos autor x su id
            let personaje = document.getElementById("autor");



            // del codumento json accedemos al valor del nombre y del apellido
            personaje.innerHTML = respuesta.nombre + ' ' + respuesta.apellido;
           
            // console.log(personaje);

            //Como libros es un array, accedemos a sus valores x medio de un bucle
            for (var i = 0; i < respuesta.libros.length; i++) {

                // y guardamos los libros en la variable item
                var item = procesarElemento(respuesta.libros[i]);
            }
        }
        function procesarElemento(libros) {
            // estás líneas son del html, y las cogemos x su id
            let tit = document.getElementById("titulo");
            let sub = document.getElementById("subtitulo");
            // y aquí insertamos en el html el título y el subtítulo, y le ponemos += para no machacar el contenido
            tit.innerHTML += libros.titulo + " / ";
            sub.innerHTML += libros.subTitulo + " / ";
        }
        // enviamos la petición
        json.open('GET', 'ajax.json', true)
        // Le indicamos el formato de los datos del servidor
        
        json.overrideMimeType('text/plain');
        json.send();
    });

});