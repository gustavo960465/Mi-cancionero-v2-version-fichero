<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerEditarBorrarCancion = 'headerEditarBorrarCancion';

require "doctype.php";
require "header.php";
?>

<div id="contenedorFormularioEditarBorrarCancion"></div>

<script src="js_Json/formularioEditarBorrarCancion.js"></script>
<script src="js/formularioEditarBorrarCancion.js"></script>
<?php require "bodyFooter.php";?>