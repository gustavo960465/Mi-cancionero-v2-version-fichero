 $(versionCancion());

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var valor = urlParams.get('id');


                function versionCancion(consulta){

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

                                if (canciones.cancion[i].id_cancion == valor) {
                                html+=`
                                            
                                            <form method="POST" action="" id="form">
                                                <input type="hidden" name="id" value="${canciones.cancion[i].id_cancion}">
                                                <input type="text" id="formularioVersionTitulo" name="titulo" placeholder="Título:" value="${canciones.cancion[i].titulo}"><br>
                                                <input type="text" id="formularioVersionTono" name="tono" placeholder="Tono:" value="${canciones.cancion[i].tono}"><br>
                                                <input type="text" id="formularioVersionLetraUno" name="versionCancionUno" placeholder="1ra Versión..." value="${canciones.cancion[i].versionCancionUno}"><br>
                                                <input type="text" id="formularioVersionLetraDos" name="versionCancionDos" placeholder="2ra Versión..." value="${canciones.cancion[i].versionCancionDos}"><br>
                                            </form>`
                                }

                                $('#contenedorformularioVersionCancion').html(html);
                            }
                        })
                        return false;
                }
