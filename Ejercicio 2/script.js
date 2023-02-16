"use strict"
// Cuando nuestro documento esté cargado de ejecutará la función
$(document).ready(function () {
    // Cogemos el botón por su id y le asignamos un evento de ratón, donde al hacer click se ejecutará la función
    $("#boton").on("click", function () {

        // Le hacemos una petición al servidor para acceder al documento ajax.xml
        $.get("ajax.xml", function (datos) {
            
            console.log(datos);
            //ETIQUETA ITEM
            // each , por cada item guardamos en las variables nombre y apellidos los valores de los atributos de las etiquetas items
            $(datos).find("item").each(function (i, item) {
                let nombre = $(item).attr("nombre");
                let apellido = $(item).attr("apellido");
                console.log(nombre, apellido);
                // Cogemos el contenedor x su id y le añadimos los valores de los atributos
                $('#contenedor' + (i + 1)).html(nombre + " " + apellido)+"<br>";
            });

        }
        );
    });
});