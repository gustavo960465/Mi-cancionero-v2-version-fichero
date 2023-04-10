
      var guardar = document.getElementById('nuevaContrasena');
      guardar.addEventListener("click", function(e){
        e.preventDefault(e);
                    var nuevaContrasena = $('#contrasena').val();
                    if(nuevaContrasena.length == 0){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Ingrese una nueva contraseña',
                                showConfirmButton: false,
                                timer: 1500
                                })

                        }else{
                          var id = $('#id').val();
                          var nuevaContrasena = $('#contrasena').val();
                                $.ajax({
                                    type: 'POST',
                                    url: 'insertar/insertarNuevaContrasena.php',
                                    data: { id: id, nuevaContrasena: nuevaContrasena},
                                    success: function(respuesta){
                                        if(respuesta == 1){
                                            Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: '¡Su contraseña se ha cambiado, ya puede ingresar!',
                                            confirmButtonColor: '#8bc5fc',
                                            confirmButtonText: 'Ok'
                                            })
                                            .then(function(){
                                                window.location.assign('iniciarSesion.php')
                                            });
                                        }else{
                                                
                                        }
                                        
                                    }
                                });
                            }
                            return false;
                          });