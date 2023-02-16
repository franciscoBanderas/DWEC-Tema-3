"use strict"


$(window).on("load", function () {
  $("#boton").on("click", function(){
      $.getJSON("ajax.json", function (datos){
          
      
      
          $("#autor").html(datos.nombre).append(" ").append(datos.apellido);
      
          //Mostrar cada marca
          $(datos.libros).each(function (i, libro) {
            $("#titulo"+(i+1)).html(libro.titulo);
            $("#subtitulo"+(i + 1)).html(libro.subTitulo);
          });
        
      
  });

});

});