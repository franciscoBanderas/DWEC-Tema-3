<?php
if (isset($_GET["nombre"], $_GET["apellido"])) {
$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
echo "Mi nombre es $nombre $apellido";
} else {
echo "Falta el formulario";
}
?>