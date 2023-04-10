<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerMiProgramaMusical = 'headerMiProgramaMusical';
require "doctype.php";
require "header.php";
?>

<div class="contenedorFormularioEditarBorrarCancion">
    <div id="js_Json_Mi_repertorio_1"></div>
</div>

<script src="js_Json_Mi_repertorio/js_Json_Mi_repertorio_1.js"></script>
<script src="js/formularioMiProgramaMusical.js"></script>
<?php require "bodyFooter.php";?>