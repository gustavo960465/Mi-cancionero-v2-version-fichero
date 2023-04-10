
    var guardar = document.getElementById('limpiarProgramaMusical_2');
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
                                    url: 'insertar/insertarQuitarMusicaTodo_2.php',
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
                                            window.location.assign('repertorioPersonal2.php')
                                        }, 1500);
                                    }
                            });
                    return false;
                }
        }) 
    });

