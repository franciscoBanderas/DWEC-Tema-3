
//Primero generaremos un evento de ventana donde al cargar la página se ejecutará la función
window.addEventListener("load", function () {
// Posteriormente cogeremos  el botón por su id perteneciente al html y crearemos un evento de ratón, donde al hacer clik se ejecutará la función
    document.getElementById("boton").addEventListener("click", function () {

        //Crearemos un nuevo objeto XMLHttpRequest, y lo guardaremos en la variable xml 
        var xml = new XMLHttpRequest();
        //Definimos una función que se carga cuando cambia la propiedad readyState
        xml.onreadystatechange = function () {
            // evaluamos el proceso de la petición
            if (this.readyState == 4 && this.status == 200) {
                // Si todo ha ido bien en la variable documento tendremos el documento xml
                var documento = xml.responseXML;




                // En la variable elementos guardaremos La propiedad  (documentElement.childNodes) la cual devolverá una colección de nodos hijos del elemento dado, donde el primer nodo hijo es asignado con un índice 0.
                var elementos = documento.documentElement.childNodes;
                // Con Este bucle for recorremos todo el documento xml
                for (var i = 0; i < elementos.length; i++) {

                    // Mediante el iterador recorremos todos los nodos, y comprobamos si es un nodo de tipo elemento
                    if (elementos[i].nodeType == 1) //elementos[i].nodeType retornará un valor positivo entero representando el tipo de nodo.
                    {     //Creamos un contenedor en el documento html
                        var div = document.createElement('div');
                        // y dentro del contenedor añadimos el contenido de los atributos nombre y apellido pertenecientes al xml
                        div.innerHTML = elementos[i].getAttribute("nombre") + " " + elementos[i].getAttribute("apellido") + "<br>";
                         // agregamos un nuevo nodo hijo en el html
                        div.appendChild(elementos[i]);
                        // y los insertamos en el cuerpo del html
                        document.body.appendChild(div);
                    }
                }
            }
        }
        // Apertura del archivo XML ajax1.xml en modo asíncrono 
        xml.open("get", "ajax.xml", true);
        /* Envío de la consulta HTTP al servidor  */
        xml.send();
    })
});

