

$(function(){
  setTextareaHeight($('#formularioEditarBorrarLetra'));
})

function setTextareaHeight(textareas) {
    textareas.each(function () {
        var textarea = $(this);
 
        if ( !textarea.hasClass('autoHeightDone') ) {
            textarea.addClass('autoHeightDone');
 
            var extraHeight = parseInt(textarea.css('padding-top')) + parseInt(textarea.css('padding-bottom')), // to set total height - padding size
                h = textarea[0].scrollHeight - extraHeight;
 
            // init height
            textarea.height('auto').height(h);
 
            textarea.bind('keyup', function() {
 
                h = textarea.get(0).scrollHeight - extraHeight;
 
                textarea.height(h+'px'); // set new height
            });
        }
    })
}


var guardar = document.getElementById('guardar');
guardar.addEventListener("click", function(e){
        e.preventDefault(e);
        var formularioEditarBorrarTitulo = $('#formularioEditarBorrarTitulo').val();
                        if(formularioEditarBorrarTitulo.length == 0){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Coloque el título',
                                showConfirmButton: false,
                                timer: 1500
                                })
                                }else{
                    var form = $('#formularioEditarBorrarCancion').serialize();
                            $.ajax({
                                type: 'POST',
                                url: 'insertar/insertarEditarCancion.php',
                                data: form,
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


