$(mostrarContrasenaRegistro());

function mostrarContrasenaRegistro() {
    var contrasena = document.getElementById("contrasena");
    var imagenOjoMostrar = document.getElementById("imagenOjoMostrar");
    if(contrasena.type == "password"){
        contrasena.type = "text";
        imagenOjoMostrar.src="img/ojito2.png";
    }else{
        contrasena.type = "password";
        imagenOjoMostrar.src="img/ojito1.png";
    }
}



$(mostrarConfirmarContrasena());

function mostrarConfirmarContrasena() {
    var confirmarContrasena = document.getElementById("confirmarContrasena");
    var imagenOjoConfirmar = document.getElementById("imagenOjoConfirmar");
    if(confirmarContrasena.type == "password"){
        confirmarContrasena.type = "text";
        imagenOjoConfirmar.src="img/ojito2.png";
    }else{
        confirmarContrasena.type = "password";
        imagenOjoConfirmar.src="img/ojito1.png";
    }
}

$(document).ready(function(){
    $('#enviar').click(function(){
          var nombre = $('#nombre').val();
          var apellido = $('#apellido').val();
          var correo = $('#correo').val();
          var contrasena = $('#contrasena').val();
          var confirmarContrasena = $('#confirmarContrasena').val();
          if(nombre.length == 0 || apellido.length == 0 || correo.length == 0 || contrasena.length == 0 || confirmarContrasena.length == 0){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Llene todos los campos',
                                showConfirmButton: false,
                                timer: 1500
                                })

                        }else{
                          var datos = $('#form').serialize();
                              $.ajax({
                                  type: "POST",
                                  url: "insertar/insertarRegistro.php",
                                  data: datos,
                                  success:function(respuesta){
                                      
                                    var mostrar = JSON.parse(respuesta);

                                        for(var i in mostrar.contador){
                                            if(mostrar.contador == 1){
                                                Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: '¡Bienvenido, ya puedes iniciar sesion!',
                                                confirmButtonColor: '#8bc5fc',
                                                showConfirmButton: true
                                                })
                                                .then(function(){
                                                    window.location.assign('iniciarSesion.php');
                                                });
                                            }else if(mostrar.contador == 2){
                                                Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: '¡Este correo ya está registrado!',
                                                showConfirmButton: false,
                                                timer: 1500
                                                })
                                                setTimeout(function(){
                                                    
                                                }, 1000);
                                            }else if(mostrar.contador == 3){
                                                Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: '¡Las contraseñas no coinciden!',
                                                showConfirmButton: false,
                                                timer: 1500
                                                })
                                                setTimeout(function(){
                                                    
                                                }, 1500);
                                            }else{
                                                Swal.fire({
                                                position: 'top-center',
                                                icon: 'success',
                                                title: '¡Hubo un error!',
                                                showConfirmButton: false,
                                                timer: 1000
                                                })
                                                setTimeout(function(){
                                                    
                                                }, 1500);
                                            }
                                        }
                                }
                            });
                            return false;
                        }
                    
              });
      });