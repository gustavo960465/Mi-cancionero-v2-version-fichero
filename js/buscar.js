            $(buscar());


            $(document).on('keyup', '#buscarInput', function(){
                var valor = $(this).val();
                if(valor != ""){
                    buscar(valor);        
                }else{
                    buscar();
                }
            });

                function buscar(consulta){

                $.ajax({
                        url: 'miBlibioteca/todasLasCanciones.json',
                        type: 'POST',
                        dataType: 'html',
                        data: {consulta: consulta},
                    })
                        .done(function(respuesta){
                            
                            var canciones = JSON.parse(respuesta);
                            html="";

                            for(var i in canciones.cancion){
                                html+=`
                                            
                                            <div id="musica${canciones.cancion[i].titulo}">
                                                <div class="contenedorMiBiblioteca">
                                                    <div class="controlAncla">
                                                        <a href="formularioEditarBorrarCancion.php?id=${canciones.cancion[i].id_cancion}"
                                                        id="miBibliotecaTitulo" class="miBibliotecaTitulo" data-id="${canciones.cancion[i].titulo}"
                                                        >${canciones.cancion[i].numero}) ${canciones.cancion[i].titulo}</a>
                                                        
                                                    </div>
                                                    <div class="controlTono">
                                                        <div id="miBibliotecaTono">(${canciones.cancion[i].tono})</div>
                                                    </div>
                                                    <div class="controlEditar dropdown">
                                                        <input type="button" id="mibibliotecaAgregarMusica" class="controlBotonEditar" data-bs-toggle="dropdown" value="+">
                                                              <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                                                                <li>
                                                                <input type="submit" id="mibibliotecaAgregarMusica_1" class="dropdown-item" data-id="${canciones.cancion[i].id_cancion}"
                                                                data-value="${canciones.cancion[i].miRepertorio_1}" value="Mi Repertorio (1)">
                                                                </li>
                                                                <li><hr class="dropdown-divider"></li>
                                                                <li>
                                                                <input type="submit" id="mibibliotecaAgregarMusica_2" class="dropdown-item" data-id="${canciones.cancion[i].id_cancion}"
                                                                data-value="${canciones.cancion[i].miRepertorio_2}" value="Mi Repertorio (2)">
                                                                </li>
                                                              </ul>
                                                    </div>
                                                    <div class="controlBorrar">
                                                        <input type="submit" id="miBibliotecaBorrarMusica" class="controlBotonBorrar" data-id="${canciones.cancion[i].id}"
                                                        data-value="${canciones.cancion[i].titulo}" value="Borrar">
                                                    </div>
                                                </div>
                                            </div>`
                            }
                                $('#miBibliotecaTono1').html(html);
                        })
                        return false;
                }