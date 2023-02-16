//Primero generaremos un evento de ventana donde al cargar la página se ejecutará la función
window.addEventListener("load", function () {
    // Posteriormente cogeremos  el botón por su id perteneciente al html y crearemos un evento de ratón, donde al hacer clik se ejecutará la función
    document.getElementById("boton").addEventListener("click", function () {
        // creamos un nuevo objeto XMLHttpRequest y la guardamos en la variable doc
        let doc = new XMLHttpRequest();
//ejecutamos la función perteneciente a doc.onreadystatechange la cual evalua el estado del requerimiento hecho al servidor
        doc.onreadystatechange = function () {
            //evaluamos la petición al servidor
            if (this.readyState == 4 && this.status == 200) {
                
                // creamos un contenedor en el documento html
                let div = document.createElement('div');
                


                // Insertamos en el div el documento HTML
                div.innerHTML = this.responseText;

                // agregamos un nuevo nodo hijo en el html
                document.body.appendChild(div);
            }
        }
        // Se pasa por URL nuestro nombre y apellido
        doc.open("GET", "ajax.php?nombre=francisco&apellido=Carballo", true)
        doc.send()
    })
})