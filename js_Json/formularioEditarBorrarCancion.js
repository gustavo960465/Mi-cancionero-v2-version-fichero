$(consulta1());


function consulta1(){

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var valor = urlParams.get('id');

                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function() {

                                if (this.readyState == 4 && this.status == 200) {
                                    var res = this.responseText;
                                    var canciones = JSON.parse(res);

                                     html="";

                                    for(var i in canciones.cancion){

                                        if (valor == canciones.cancion[i].id_cancion) {

                                        html+=`
                                                    <form method="POST" action="" id="formularioEditarBorrarCancion">
                                                        <input type="hidden" name="id_cancion" value="${canciones.cancion[i].id_cancion}">
                                                        <input type="text" id="formularioEditarBorrarTitulo" name="titulo" placeholder="Título:" Required value="${canciones.cancion[i].titulo}"><br>
                                                        <input type="text" id="formularioEditarBorrarTono" name="tono" placeholder="Tono:" Required value="${canciones.cancion[i].tono}"><br>
                                                        <textarea type="text" id="formularioEditarBorrarLetra" cols="50" name="letra" 
                                                        placeholder="Escribe aquí...">${canciones.cancion[i].letra}</textarea>
                                                    </form>`
                                        }
                                            $('#contenedorFormularioEditarBorrarCancion').html(html);
                                    }
                                }
                            };
                            xhttp.open("POST", "miBlibioteca/todasLasCanciones.json", true);
                            xhttp.send();
                        }