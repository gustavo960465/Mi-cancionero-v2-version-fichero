<?php

require "doctype.php";


?>

<div class="contenedorFormularioRegistro">
    <div class="registroImagen"><img src="img/libro.png" alt="" class="registroimagenLibro"></div>
        <form id="form" class="formularioRegistro" method="POST">
            <span class="formularioRegistroSpan">Primer Nombre:</span>
              <input type="text" name="nombre" id="nombre" class="formularioRegistroInput" autocomplete="off" required>
            <span class="formularioRegistroSpan">Primer Apellido:</span>
              <input type="text" name="apellido" id="apellido" class="formularioRegistroInput" autocomplete="off" required>
            <span class="formularioRegistroSpan">Correo:</span>
              <input type="email" name="correo" id="correo" class="formularioRegistroInput" autocomplete="off" required>
                    
                      <div class="contenedorContrasenaYmostrar">
                        <span class="formularioRegistroSpan">Crear Contraseña:</span>
                            <div class="contenedorInternoContrasena">
                                <input type="password" name="contrasena" id="contrasena" class="formularioRegistroInput" require>
                            </div>
                            <div class="contenedorInternoMostrarContrasenaRegistro">
                                <button type="button" class="mostrarContrasena" onclick="mostrarContrasenaRegistro();"><img id="imagenOjoMostrar" class="ojito1"></button>
                            </div>
                      </div>
                      <div class="contenedorConfirmarContrasenaYmostrar">
                        <span class="formularioRegistroSpan">Confirmar Contraseña:</span>
                            <div class="contenedorInternoContrasena">
                                <input type="password" name="confirmarContrasena" id="confirmarContrasena" class="formularioRegistroInput" require>
                            </div>
                            <div class="contenedorInternoMostrarContrasenaRegistro">
                                <button type="button" class="mostrarContrasena" onclick="mostrarConfirmarContrasena();"><img id="imagenOjoConfirmar" class="ojito1"></button>
                            </div>
                      </div>
                      
                      
                     
                      <div class="contenedorInternoOlvidoYregistro">
                         <a href='iniciarSesion.php' class="iniciarSesionTitulo">¡Iniciar sesión!</a><br>
                      </div>
            <div class="iniciarSesionDiv">
              <input type="button" class="iniciarSesion" id="enviar" value="Registrame">
            </div>
        </form>

<script src="js/registro.js"></script>
<?php require "bodyFooter.php";?>