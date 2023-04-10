

var guardar = document.getElementById('guardarFormularioMiProgramaMusical');
                guardar.addEventListener("click", function(e){
                    e.preventDefault(e);
                        var formularioNuevoTitulo = $('#formularioNuevoTitulo').val();
                        var formularioNuevaLetra = $('#formularioNuevaLetra').val();
                        if(formularioNuevoTitulo.length == 0 || formularioNuevaLetra.length == 0){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Solo la tonalidad puede ir vacia',
                                showConfirmButton: false,
                                timer: 1500
                                })

                        }else{
                            var form = $('#form').serialize();
                                $.ajax({
                                type: 'POST',
                                url: 'insertar/insertarNuevaCancion.php',
                                data: form,
                                success: function(respuesta){
                                    if(respuesta == 1){
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: 'Guardado con éxito',
                                            showConfirmButton: false,
                                            timer: 1500
                                            })
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
                            });
                        }   
                        form.reset();
                        return false; 
                    });