<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerFormularioPerfil = 'headerFormularioPerfil';
require "doctype.php";
require "header.php";
?>

<div class="miPerfilEncabezado">Mi Perfil</div>
    <div id="contenedorMiPerfil" class="contenedorMiPerfil"></div>

<script src="js_Json/perfil.js"></script>
<script src="js/formularioPerfil.js"></script>
<?php require "bodyFooter.php";?>