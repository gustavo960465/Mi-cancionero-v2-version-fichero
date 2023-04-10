<?php
session_start();

require "doctype.php";

?>


<div class="contenedorIniciarSesion">
        <div class="iniciarSesionImagen"><img src="img/libro.png" alt="" class="imagenLibro"></div>
            <form class="formularioIniciarSesion" id="formularioIniciarSesion" method="POST">
                    <span class="iniciarSesionSpan">Correo:</span>
                        <input type="email" name="correo" class="inputIniciarSesion" id="correo" required>
                            <div class="contenedorContrasenaYmostrar">
                                <span class="iniciarSesionSpan">Contraseña:</span>
                                    <div class="contenedorInternoContrasena">
                                        <input type="text" name="contrasena" class="inputIniciarSesion" id="contrasena" required>
                                    </div>
                                    <div class="contenedorInternoMostrarContrasena">
                                        <button type="button" class="mostrarContrasena" onclick="mostrarContrasena();"><img id="imagenOjo" class="ojito1"></button>
                                    </div>
                            </div>
                            <div class="contenedorInternoOlvidoYregistro">
                                <a href='formularioOlvidoDeContrasena.php' class="OlvideMiContrasena">¿Olvidé mi contraseña?</a>
                                <a href='registro.php' class="registrame" >¡Registrarme!</a>
                            </div>
                    <div class="iniciarSesionDiv">
                          <input type="submit" class="inputIniciarSesionBoton" id="inputIniciarSesionBoton" name="enviar" value="Iniciar Sesión">
                    </div>
                        
            </form>   
</div>


<script src="js/iniciarSesion.js"></script>
<?php require "bodyFooter.php";?>