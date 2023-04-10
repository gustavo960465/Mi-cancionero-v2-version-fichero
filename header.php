<nav class="navbar navbar-light barra-nav">


<?php
if(isset($_SESSION['id'])){} ?>

    <form class="d-flex">
        <ul class="nav">
            <li class="nav-item">
                  <?php if($_SESSION['imagen'] <= 0){
                      echo "<img src='img/usuario.png' style='width: 40px; margin: 8px;' class='imagen'>";
                        }else{
                      echo "<img src='' class='imagen'>";
                        } ?>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="false" id="nombreHeader" href="#" role="button"
                    aria-expanded="false">
                <?php echo $_SESSION['nombre'] .' '. $_SESSION['apellido'] ?>
                      </a>
                        <ul class="dropdown-menu">
                                  <li><a href="miBiblioteca.php" class="dropdown-item" style="text-decoration: none">Mi Biblioteca</a></li>
                                      <div class="dropdown">
                                          <button id="dLabel" type="button" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Mi Repertorios
                                          </button>
                                          <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                                            <li><a href="miRepertorio1.php" class="dropdown-item" style="text-decoration: none">
                                            Mi Repertorio (1)</a>
                                            <li><hr class="dropdown-divider"></li>
                                            </li>
                                            <li><a href="miRepertorio2.php" class="dropdown-item" style="text-decoration: none">
                                            Mi Repertorio (2)</a>
                                            </li>
                                          </ul>
                                      </div>
                                  <li><a href="nuevaCancion.php" class="dropdown-item" style="text-decoration: none">Agregar Canción</a></li>
                                  <li><a href="formularioPerfil.php?id=<?php echo $_SESSION['correo']; ?>" class="dropdown-item" style="text-decoration: none">Mi Perfil</a></li>
                                  <li><a href="#" class="dropdown-item" style="text-decoration: none">Notificaciones</a></li>
                                  <li><a href="soporteTecnico.php" class="dropdown-item" style="text-decoration: none">Soporte Técnico</a></li>
                                  <li><hr class="dropdown-divider"></li>
                                  <li><a href="cerrarSesion.php" class="dropdown-item" style="text-decoration: none">Cerrar Sesión</a></li>
                            </ul>
            </li>
        </ul>
         
      
    </form>


    <ul class="nav justify-content-end">
        <li class="nav-item">
          <?php
          if(isset($headerBiblioteca)){ ?> 
            <input type="text" id="buscarInput" class="buscarInput" name="buscar" Placeholder="Buscar:" autocomplete="off">
          <?php }elseif(isset($headerMiRepertorioMusical)){ ?> 
            <a id='limpiarProgramaMusical' class='limpiarProgramaMusical' data-id='<?php echo 01 ; ?>' >Borrar Repertorio</a>
          <?php }elseif(isset($headerMiRepertorioMusical_2)){ ?> 
            <a id='limpiarProgramaMusical_2' class='limpiarProgramaMusical' data-id='<?php echo 01 ; ?>' >Borrar Repertorio</a>
          <?php }elseif (isset($headerMiProgramaMusical)){ ?> 
            <a id="guardarPerfil" class="guardarPerfil">Guardar</a>
          <?php }elseif (isset($headerNuevaCancion)){ ?> 
            <a id="guardarNuevaCancion" class="guardarNuevaCancion">Agregar</a>
          <?php }elseif (isset($headerFormularioPerfil)){ ?> 
            <a id="guardarPerfil" class="guardarPerfil">Guardar</a>
          <?php }elseif (isset($headerSoporteTecnico)){ ?> 
            <a id="enviarSoporteTecnico" class="enviarSoporteTecnico">Enviar</a>
          <?php }elseif(isset($headerPropaganda)){ ?> 
            <a href="miBiblioteca.php" id="headerPropaganda" class="headerPropaganda" style="margin: 8px;">Mi biblioteca</a>
          <?php }elseif(isset($guardarVersionCancion)){ ?> 
            <a id="guardarVersionCancion" class="guardarVersionCancion">Guardar</a>
          <?php }elseif(isset($headerEditarBorrarCancion) && isset($_GET['id'])){ ?>
            <a href="formularioVersionCancion.php?id=<?php echo $_GET['id']; ?>" id="formularioVersionCancionBoton" class="formularioVersionCancionBoton">Versión</a>
            <a id="guardar" class="guardar" name="guardar">Guardar</a>
          <?php }else{

          } ?>
            
        </li>
    </ul>
</nav>