mostrarContrasenaPerfil();

function mostrarContrasenaPerfil() {
    var contrasenaPerfil = document.getElementById("contrasenaPerfil");
    var imagenOjoConfirmar = document.getElementById("imagenOjoConfirmar");
    if(contrasenaPerfil.type == "text"){
        contrasenaPerfil.type = "password";
        imagenOjoConfirmar.src ="img/ojito2.png";
    }else{
        contrasenaPerfil.type = "text";
        imagenOjoConfirmar.src ="img/ojito1.png";
    }
}

                var guardar = document.getElementById('guardarPerfil');
                    guardar.addEventListener("click", function(e){
                        e.preventDefault(e);
                        var nombrePerfil = $('#nombrePerfil').val();
                        var apellidoPerfil = $('#apellidoPerfil').val();
                        var correoPerfil = $('#correoPerfil').val();
                        var contrasenaPerfil = $('#contrasenaPerfil').val();
                        var numeroTelefonicoPerfil = $('#numeroTelefonicoPerfil').val();
                        var paisPerfil = $('#paisPerfil').val();
                        if(nombrePerfil.length == 0 || apellidoPerfil.length == 0 || correoPerfil.length == 0 || contrasenaPerfil.length == 0){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: '¡Nombre, Apellido, Correo, Contraseña, son obligatorio!',
                                showConfirmButton: false,
                                timer: 1500
                                })
                                }else{
                        var formPerfil = $('#formPerfil').serialize();
                                $.ajax({
                                    type: 'POST',
                                    url: 'insertar/insertarPerfil.php',
                                    data: formPerfil,
                                    success: function(){
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: 'Guardado',
                                            showConfirmButton: false,
                                            timer: 1500
                                            })
                                        }
                                    });
                                }
                                return false;
                })