

var guardar = document.getElementById('guardarVersionCancion');
guardar.addEventListener("click", function(e){
        e.preventDefault(e);
        var form = $('#form').serialize();
        $.ajax({
            type: 'POST',
            url: 'insertar/insertarVersionCancion.php',
            data: form,
            success: function(respuesta){
                var mostrar = JSON.parse(respuesta);
                
                    for(var i in mostrar.numero){
                        if(mostrar.numero == 1){
                            Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Debe ser usuario:<p style="font-weight: bold; color: #329afc">¡Premium!</p>',
                            showConfirmButton: false,
                            timer: 1000
                            })
                            .then(function(){
                                
                            });
                        }else if(mostrar.numero == 2){
                            Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: '¡Agregado!',
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