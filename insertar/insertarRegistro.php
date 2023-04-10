<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$contrasena2 = md5($contrasena);
$confirmarContrasena = $_POST['confirmarContrasena'];
$imagen = '';
$pais = '';
$estado = '';

$file = "../usuario_registrado/".$correo.".json";
$data = array();


$contador1 = 1;
$contador2 = 2;
$contador3 = 3;

if(file_exists($file)){

    $data2['contador'][] = $contador2;

}elseif ($contrasena != $confirmarContrasena){

    $data2['contador'][] = $contador3;

}else{

    $data = array('usuario' => 
        
                array(

                    array (
                        "id" => "01",
                        "id_usuario" => "02",
                        "nombre" => $nombre,
                        "apellido" => $apellido,
                        "correo" => $correo,
                        "contrasena" => $contrasena,
                        "contrasena2" => $contrasena2,
                        "numeroTelefonico" => "",
                        "imagen" => $imagen,
                        "pais" => $pais,
                        "estado" => $estado
                    ) 
                ) 
            );


    $usuario = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($file, $usuario);
    
  
    $data2['contador'][] = $contador1;
}

echo json_encode($data2);

?>