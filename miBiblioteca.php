<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerBiblioteca ='headerBiblioteca';

require "doctype.php";
require "header.php";
?>

<div id="miBibliotecaEncabezado">Mi Biblioteca</div>

<div id="miBibliotecaTono1"></div>

<script src="js/doctype.js"></script>
<script src="js/miBiblioteca.js"></script>
<script src="js/buscar.js"></script>
<?php require "bodyFooter.php";?>