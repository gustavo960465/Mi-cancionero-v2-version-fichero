

  

  var guardar = document.getElementById('enviarSoporteTecnico');

      guardar.addEventListener("click", function(e){

          e.preventDefault(e);

          var correo = $('#correo').val();

          var tituloSoporteTecnico = $('#tituloSoporteTecnico').val();

          var cajaSoporteTecnico = $('#cajaSoporteTecnico').val();

          if(tituloSoporteTecnico.length == 0){

              Swal.fire({

                  position: 'top-center',

                  icon: 'success',

                  title: '¡Ingrese un título!',

                  showConfirmButton: false,

                  timer: 1500

                  })

                  }else if(cajaSoporteTecnico.length == 0){

              Swal.fire({

                  position: 'top-center',

                  icon: 'success',

                  title: '¿Cual es su sugerencia?',

                  showConfirmButton: false,

                  timer: 1500

                  })

                  }else{

                    var correo = $('#correo').val();

                    var tituloSoporteTecnico = $('#tituloSoporteTecnico').val();

                    var cajaSoporteTecnico = $('#cajaSoporteTecnico').val();

                  $.ajax({

                      type: 'POST',

                      url: 'insertar/insertarSoporteTecnico.php',

                      data: { correo: correo, tituloSoporteTecnico: tituloSoporteTecnico, cajaSoporteTecnico: cajaSoporteTecnico},

                      success: function(respuesta){

                          if(respuesta == 1){

                                Swal.fire({

                                    position: 'top-center',

                                    icon: 'success',

                                    title: 'Enviado',

                                    confirmButtonColor: '#8bc5fc',

                                    showConfirmButton: true

                                    })

                                    .then(function(){

                                        $('#tituloSoporteTecnico').val('');

                                        $('#cajaSoporteTecnico').val('');

                                });

                          }else{



                          }

                          

                          }

                      });

                  }

          return false;

  });