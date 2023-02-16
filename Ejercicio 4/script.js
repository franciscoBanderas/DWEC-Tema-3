$(document).ready(function () 
{
    $("#boton").on("click", function () 
    {

        // enviamos los parámetros por la url nombre y apellidos al documento ajax y ejecutamos la función
        $.get("ajax.php?nombre=francisco&apellido=carballo", function (datos) 
        {
               // Ahora procedemos a crear el contenedor en el body, append es  un método que te añade lo que le pasamos lo que tenemos entre paréntesis
            $("body").append("<div id='contenedor'></div>");
// cogemos el div x su id y le introducimos datos
//El método punto html nos permite insertar datos con el elemento al que estamos llamando.
            $("#contenedor").html(datos);
        }
        );
    });
})