mostrarContrasena();

function mostrarContrasena() {
    var tipo = document.getElementById("contrasena");
    var imagenOjo = document.getElementById("imagenOjo");
    if(tipo.type == "password"){
            tipo.type = "text";
            imagenOjo.src="img/ojito2.png";
    }else{
            tipo.type = "password";
            imagenOjo.src="img/ojito1.png";
    }
}



var guardar = document.getElementById('inputIniciarSesionBoton');
    guardar.addEventListener("click", function(e){
        e.preventDefault(e);
            var correo = $('#correo').val();
            var contrasena = $('#contrasena').val();
                        if(correo.length == 0){
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: '¡Ingrese su correo!',
                                    showConfirmButton: false,
                                    timer: 1500
                                    })
                            }else if(contrasena.length == 0){
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: '¡Ingrese la contraseña!',
                                    showConfirmButton: false,
                                    timer: 1500
                                    })
                            }else{
                                var form = $('#formularioIniciarSesion').serialize();
                                $.ajax({
                                    type: 'POST',
                                    url: 'insertar/insertarIniciarSesion.php',
                                    data: form,
                                    success: function(respuesta){

                                        var mostrar = JSON.parse(respuesta);

                                        for(var i in mostrar.contador){
                                                if(mostrar.contador == 1){
                                                Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'success',
                                                    title: '¡Bienvenid@!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                    })
                                                    .then(function(){
                                                        window.location.assign('miBiblioteca.php')
                                                    });
                                                }else{
                                                    Swal.fire({
                                                    position: 'top-center',
                                                    icon: 'error',
                                                    title: '¡Revise el correo y contraseña!',
                                                    showConfirmButton: false,
                                                    timer: 2000
                                                    })
                                                }
                                        }
                                    }
                                });
                                return false;
                            }    
})