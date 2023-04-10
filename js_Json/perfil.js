 $(miPerfil());


                function miPerfil(consulta){
                    
                    var queryString = window.location.search;
                    var urlParams = new URLSearchParams(queryString);
                    var valor = urlParams.get('id');

                $.ajax({
                        url: 'usuario_registrado/' + valor +'.json',
                        type: 'POST',
                        dataType: 'html',
                        data: {consulta: consulta},
                    })
                        .done(function(respuesta){
                            var canciones = JSON.parse(respuesta);
                            html="";

                            for(var i in canciones.usuario){

                              
                                html+=`
                                            
                                        <form method="POST" action="" id="formPerfil">
                                            <input type="hidden" id="idPerfil" class="inputPerfil" name="id" value="${canciones.usuario[i].id}">
                                            <span class="spanMiPerfil">Nombre:</span>
                                            <input type="text" id="nombrePerfil" class="inputPerfil" name="nombre" value="${canciones.usuario[i].nombre}"><br>
                                            <span class="spanMiPerfil">Apellido:</span>
                                            <input type="text" id="apellidoPerfil" class="inputPerfil" name="apellido" value="${canciones.usuario[i].apellido}"><br>
                                            <span class="spanMiPerfil">Correo:</span>
                                            <input type="email" id="correoPerfil" class="inputPerfil" name="correo" value="${canciones.usuario[i].correo}">
                                            <div class="contenedorInternoMostrarContrasenaPerfil">
                                                <button type="button" class="mostrarContrasena" onclick="mostrarContrasenaPerfil();"><img id="imagenOjoConfirmar" class="ojito1"></button>
                                            </div>
                                                <span class="spanMiPerfil">Contraseña:</span>
                                                    <input type="text" id="contrasenaPerfil" class="inputPerfil" name="contrasena" value="${canciones.usuario[i].contrasena}" autocomplete="off">
                                                <span class="spanMiPerfil"># Telefónico:</span>
                                            <input type="text" id="numeroTelefonicoPerfil" class="inputPerfil" name="numeroTelefonico" value="${canciones.usuario[i].numeroTelefonico}"><br>
                                            <span class="spanMiPerfil">Pais:</span>
                                            <input type="text" id="paisPerfil" class="inputPerfil" name="paisPerfil" value="${canciones.usuario[i].pais}"><br>
                                        </form>`
                                }

                                $('#contenedorMiPerfil').html(html);
                            
                        })
                        return false;
                }