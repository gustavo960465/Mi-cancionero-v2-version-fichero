 $(js_Json_Mi_repertorio_1());

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var valor = urlParams.get('id');

                function js_Json_Mi_repertorio_1(consulta){

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
                                            
                                        <form method="POST" action="" id="formularioEditarBorrarCancion">
                                        <input type="hidden" name="id_cancion" value="${canciones.cancion[i].id_cancion}">
                                        <input type="text" id="formularioEditarBorrarNumero" name="formularioEditarBorrarNumero"`
                                        if(canciones.cancion[i].numeroMiRepertorio_1 == 0){
                                            html+=`placeholder="#"`
                                        }else if(canciones.cancion[i].numeroMiRepertorio_1 >= 1){
                                            html+=`value="${canciones.cancion[i].numeroMiRepertorio_1}"`
                                        }
                                            html+=`Required  autocomplete="off">
                                        <input type="text" id="formularioEditarBorrarTitulo" name="titulo" placeholder="Título:" Required value="${canciones.cancion[i].titulo}"><br>
                                        <input type="text" id="formularioEditarBorrarTono" name="tono" placeholder="Tono:" Required value="${canciones.cancion[i].tono}"><br>
                                        <textarea type="text" id="formularioEditarBorrarLetra" cols="50" style="resize: none; border: 0; outline: none; text-align: center; width: 240px;" name="letra" placeholder="Escribe aquí..." Required>${canciones.cancion[i].letra}</textarea>
                                        </form>`
                                }

                                $('#js_Json_Mi_repertorio_1').html(html);
                            }
                        })
                        return false;
                }

           
    

      