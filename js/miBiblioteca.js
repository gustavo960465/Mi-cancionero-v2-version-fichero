
                $(document).on("click", "#mibibliotecaAgregarMusica_1", function(){
                    var id = $(this).data("id");
                    var value = $(this).data("value");
                                $.ajax({
                                    url: 'insertar/InsertarMiRepertorio1.php',
                                    type: 'POST',
                                    dataType: 'html',
                                    data: {id: id, value: value},
                                    success: function(respuesta){
                                        var mostrar = JSON.parse(respuesta);

                                            console.log(mostrar);

                                            for(var i in mostrar.numero){
                                                if(mostrar.numero == 1){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡Agregado!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    .then(function(){
                                                        
                                                    });
                                                }else if(mostrar.numero == 2){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡La canción ya está agregada!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }else if(mostrar.numero == 3){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: 'Debe ser usuario:<p style="font-weight: bold; color: #329afc">¡Premium!</p>',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }else{
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡Hubo un error!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }
                                            }
                                                
                                    },
                        });
                                return false;
                })

                $(document).on("click", "#mibibliotecaAgregarMusica_2", function(){
                    var id = $(this).data("id");
                    var value = $(this).data("value");
                                $.ajax({
                                    url: 'insertar/InsertarMiRepertorio2.php',
                                    type: 'POST',
                                    dataType: 'html',
                                    data: {id: id, value: value},
                                    success: function(respuesta){
                                        var mostrar = JSON.parse(respuesta);

                                        console.log(mostrar);

                                            for(var i in mostrar.numero){
                                                if(mostrar.numero == 1){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡Agregado!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    .then(function(){
                                                        
                                                    });
                                                }else if(mostrar.numero == 2){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡La canción ya está agregada!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }else if(mostrar.numero == 3){
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: 'Debe ser usuario:<p style="font-weight: bold; color: #329afc">¡Premium!</p>',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }else{
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡Hubo un error!',
                                                    showConfirmButton: false,
                                                    timer: 1000
                                                    })
                                                    setTimeout(function(){
                                                        
                                                    }, 1000);
                                                }
                                            }
                                                
                                    },
                        });
                                return false;
                })



$(document).on("click", "#miBibliotecaBorrarMusica", function(){
        var id = $(this).data("id");
        var titulo = $(this).data("value");
        Swal.fire({
                title: '¿'+'Borrar de Biblioteca' + '<div style="color: #f50000">' + titulo + '</div> ?',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No',
                confirmButtonColor: '#8bc5fc',
                cancelButtonColor: '#8bc5fc',
                confirmButtonText: 'Sí'
                }).then((result) => {
                if (result.isConfirmed) {
                                $.ajax({
                                    type: 'POST',
                                    url: 'insertar/insertarBorrarCancion.php',
                                    data: {id: id, titulo: titulo},
                                    success: function(){
                                        Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Borrado',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                        .then(function(){
                                            $('#musica' + titulo).remove();
                                            $("#miBibliotecaBorrarMusica").on('click');
                                        });
                                    }
                                });
                        return false;
                }
        })
})