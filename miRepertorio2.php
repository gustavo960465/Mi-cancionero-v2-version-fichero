<?php
session_start();


if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerMiRepertorioMusical_2 ='headerMiRepertorioMusical_2';

require "doctype.php";
require "header.php";

?>
<div id="miProgramaMusicalEncabezado">Mi Repertorio (2)</div>

<div id="miRepertorio2"></div>

<script src="js_Json/miRepertorio2.js"></script>
<script src="js/miRepertorio_1.js"></script>
<script src="js/doctype.js"></script>
<?php require "bodyFooter.php";?>