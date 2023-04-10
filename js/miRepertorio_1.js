

$(document).on("click", "#miProgramaMusicalQuitarMusica", function(){
    var id = $(this).data("id");
    var titulo = $(this).data("value");
    Swal.fire({
                title: '¿Borrar' + '<br>' +'<div style="color: #329afc">' + titulo + '</div>' + '<div>del repertorio musical 1?</div>',
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
                                    url: 'insertar/insertarQuitarMusica.php',
                                    data: {id: id},
                                    success: function(){
                                        Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: '¡Música borrada del repertorio!',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                        .then(function(){
                                            $('#musica' + id).remove();
                                        });
                                    }
                            });
                    return false;
                }
        }) 

})



$(document).on("click", "#miProgramaMusicalQuitarMusica_2", function(){
    var id = $(this).data("id");
    var titulo = $(this).data("value");
    Swal.fire({
                title: '¿Borrar' + '<br>' +'<div style="color: #329afc">' + titulo + '</div>' + '<div>del repertorio musical 2?</div>',
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
                                    url: 'insertar/insertarQuitarMusica_2.php',
                                    data: {id: id},
                                    success: function(){
                                        Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: '¡Música borrada del repertorio!',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                        .then(function(){
                                            $('#musica' + id).remove();
                                        });
                                    }
                            });
                    return false;
                }
        }) 

})

var guardar = document.getElementById('limpiarProgramaMusical');
    guardar.addEventListener("click", function(e){
        var id = $(this).data("id");
        e.preventDefault(e);
        Swal.fire({
                title: '¿Borrar repertorio?',
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
                                    url: 'insertar/insertarQuitarMusicaTodo.php',
                                    data: {id: id},
                                    success: function(){
                                        Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: '¡Repertorio Borrado!',
                                        showConfirmButton: false,
                                        timer: 1500
                                        })
                                        setTimeout(function(){
                                            window.location.assign('miRepertorio1.php')
                                        }, 1500);
                                    }
                            });
                    return false;
                }
        }) 
    });