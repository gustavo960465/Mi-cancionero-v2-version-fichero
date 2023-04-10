<?php
session_start();


if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerMiRepertorioMusical ='headerMiRepertorioMusical';

require "doctype.php";
require "header.php";

?>
<div id="miProgramaMusicalEncabezado">Mi Repertorio (1)</div>

<div id="miRepertorio1"></div>

<script src="js_Json/miRepertorio1.js"></script>
<script src="js/miRepertorio_1.js"></script>
<script src="js/doctype.js"></script>
<?php require "bodyFooter.php";?>