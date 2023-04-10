<?php
session_start();

if(!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$guardarVersionCancion = 'guardarVersionCancion';
require "doctype.php";
require "header.php";

?>

<div class="miPerfilEncabezado">URL Version Canción</div>
<div class="contenedor" id="contenedorformularioVersionCancion"></div>

<script src="js_Json/formularioVersionCancion.js"></script>
<script src="js/formularioVersionCancion.js"></script>
<?php require "bodyFooter.php";?>