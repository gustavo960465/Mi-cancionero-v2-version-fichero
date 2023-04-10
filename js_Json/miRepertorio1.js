 $(miRepertorio1());



                function miRepertorio1(consulta){

                $.ajax({
                        url: "miBlibioteca/todasLasCanciones.json",
                        type: 'POST',
                        dataType: 'html',
                        data: {consulta: consulta},
                    })
                        .done(function(respuesta){
                            var canciones = JSON.parse(respuesta);
                            html="";

                            for(var i in canciones.cancion){

                                if (canciones.cancion[i].miRepertorio_1 == 1) {
                                html+=`
                                            
                                            <div id="musica${canciones.cancion[i].id_cancion}" class="programaMusical">
                                                <div class="contenedorMiProgramaMusical">
                                                    <div class="miProgramaMusicalNumero">
                                                        <input type="text" id="miProgramaMusicalNumero" class="miProgramaMusicalInputNumero"`
                                                        if (canciones.cancion[i].numeroMiRepertorio_1 == 0)
                                                            { html+=`value="#)"`}
                                                        else if (canciones.cancion[i].numeroMiRepertorio_1 >= 1)
                                                            { html+=`value="${canciones.cancion[i].numeroMiRepertorio_1})"`}
                                                        html+=`Required value="">
                                                    </div>
                                                    <div class="controlAncla">
                                                        <a href="formularioMiRepertorio1.php?id=${canciones.cancion[i].id_cancion}" class="miProgramaTitulo" id="miProgramaMusicalTitulo"
                                                        data-id="${canciones.cancion[i].titulo}">${canciones.cancion[i].titulo}</a>
                                                    </div>
                                                    <div class="miProgramaTono">
                                                        (${canciones.cancion[i].tono})
                                                    </div>
                                                    <div class="miProgramaQuitarMusica">
                                                        <input type="submit" id="miProgramaMusicalQuitarMusica" class="miProgramaBotonQuitarMusica" data-id="${canciones.cancion[i].id_cancion}"
                                                        data-value="${canciones.cancion[i].titulo}" value="Borrar">
                                                    </div>
                                                </div>
                                            </div>`
                                }

                                $('#miRepertorio1').html(html);
                            }
                        })
                        return false;
                }