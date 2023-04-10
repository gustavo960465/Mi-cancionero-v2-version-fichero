
$('#formularioNuevaLetra').on("keyup input", function(){
    $(this).css('height', 'auto').css('height',this.scrollHeight+(this.offsetHeight - this.clientHeight));
});

    var guardar = document.getElementById('guardarNuevaCancion');
        guardar.addEventListener("click", function(e){
            e.preventDefault(e);
                var formularioNuevoTitulo = $('#formularioNuevoTitulo').val();
                var formularioNuevaLetra = $('#formularioNuevaLetra').val();
                if(formularioNuevoTitulo.length == 0 || formularioNuevaLetra.length == 0){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: '¡Solo la tonalidad puede ir vacia!',
                        showConfirmButton: false,
                        timer: 1500
                        })

                }else{
                    var formularioNuevoTitulo = $('#formularioNuevoTitulo').val();
                    var formularioNuevoTono = $('#formularioNuevoTono').val();
                    var formularioNuevaLetra = $('#formularioNuevaLetra').val();
                        $.ajax({
                        type: 'POST',
                        url: 'insertar/insertarNuevaCancion.php',
                        data: {titulo: formularioNuevoTitulo, tono: formularioNuevoTono, letra: formularioNuevaLetra},
                        success: function(respuesta){
                            var mostrar = JSON.parse(respuesta);
                            for(var i in mostrar.contador){
                                if(mostrar.contador == 1){
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Guardado con éxito',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                        setTimeout(function(){
                                            window.location.assign('miBiblioteca.php')
                                    },  1500);
                                }else{
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'La canción está en la biblioteca',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                }
                            }
                        }
                    });

                    return false; 
                }
                
            });