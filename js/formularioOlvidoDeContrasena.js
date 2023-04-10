
var guardar = document.getElementById('enviar');
    guardar.addEventListener("click", function(e){
        e.preventDefault(e);
        var olvidoDeContrasena = $('#olvidoDeContrasena').val();
        if(olvidoDeContrasena.length == 0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Ingresa tu correo',
                    showConfirmButton: false,
                    timer: 1500
                    })

            }else{
                var form = $('#formularioOlvidoDeContrasena').serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'insertar/insertarOlvidoDeContrasena.php',
                        data: form,
                        success: function(respuesta){
                            if(respuesta == 1){
                                Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: '¡Te hemos enviado un correo para cambiar tu contraseña!',
                                confirmButtonColor: '#8bc5fc',
                                confirmButtonText: 'Ok'
                                })
                                .then(function(){
                                    window.location.assign('iniciarSesion.php')
                                });
                            }else{
                                Swal.fire({
                                position: 'top-center',
                                icon: 'question',
                                title: '¡Este correo electrónico no esta registrado en nuestra base de datos!',
                                confirmButtonColor: '#8bc5fc',
                                confirmButtonText: 'Ok'
                                })
                            }
                            
                        }
                    });
                    return false;
                }
                
})