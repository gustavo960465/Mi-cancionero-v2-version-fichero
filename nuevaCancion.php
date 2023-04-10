<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerNuevaCancion = 'headerNuevaCancion';

require "doctype.php";
require "header.php";

?>
     <div id="miBibliotecaEncabezado">Agregar Canción</div>

 

            <div id="formularioNuevaCancion">
                <form id="form" action="" method="POST">
                    <input type="text" id="formularioNuevoTitulo" name="titulo" placeholder="Título:" value="" autocomplete="off" required><br>
                    <input type="text" id="formularioNuevoTono" name="tono" placeholder="Tono:" value="" autocomplete="off"><br>
                    <textarea type="text" id="formularioNuevaLetra" name="letra"
                    placeholder="Letra de canción..." autocomplete="off" value="" required></textarea>
                </form>
            </div>

<script src="js/doctype.js"></script>
<script src="js/NuevaCancion.js"></script>
<?php require "bodyFooter.php";?>