<?php
session_start();

if (!isset($_SESSION['id'])){
    Header('Location: iniciarSesion.php');
}

$headerSoporteTecnico = 'headerSoporteTecnico';

require "doctype.php";
require "header.php";

?>


<div class="miPerfilEncabezado">Soporte Técnico</div>
    <div class="contenedorMiPerfil">


   
        <form method="POST" action="" id="formSoporteTecnico">
            <input type="hidden" id="correo" class="inputSoporteTecnico" value="tavo960465@gmail.com">
            <span class="spanSoporteTecnico">Título:</span>
            <input type="text" id="tituloSoporteTecnico" class="inputSoporteTecnico" name="titulo" value="" autocomplete="off"><br>
            <span class="spanSoporteTecnico">Sugerencia o aporte:</span><br>
            <span class="notaSoporteTecnico">Nota: Colocar el número de referencia del banco emisor.</span>
            <textarea name="sugerencia" id="cajaSoporteTecnico" class="cajaSoporteTecnico" rows="5" value=""></textarea>
            <div class="mercantil"><img src="img/mercantil.png" class="Imgmercantil" alt=""> Banco Mercantil</div>
            <center></center><span class="mercantil">Ahorro</span></center><br>
            <span class="mercantil">0105-0726-040726-017442</span><br>
            <div class="venezuela"><img src="img/venezuela.png" class="ImgVenezuela" alt=""> Banco De Venezuela</div>
            <span class="venezuela">Corriente</span><br>
            <span class="venezuela">0102-0515-8200-0026-2880</span><br>
            <div class="autor">Gustavo Granadino C.I: 17.732.744</div>
            <div class="autor">Versión: 1.0.0</div>
            <div class="derechosReservados">Todos los derechos reservados</div>
            <div class="derechosReservados">2021 - 2022.</div>
        </form>


</div>

<script src="js/doctype.js"></script>
<script src="js/soporteTecnico.js"></script>
<?php require "bodyFooter.php";?>