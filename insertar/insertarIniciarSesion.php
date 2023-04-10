<?php


$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$contrasena2 = md5($contrasena);

$file = file_get_contents("../usuario_registrado/".$correo.".json");
$usuario = json_decode($file, true);

$contador1 = 1;
$contador2 = 2;
$contador3 = 3;


	if($usuario['usuario'][0]['correo'] == $correo && $usuario['usuario'][0]['contrasena2'] == $contrasena2) {

		session_start();
		$_SESSION['id'] = $usuario['usuario'][0]['id'];
		$_SESSION['nombre'] = $usuario['usuario'][0]['nombre'];
		$_SESSION['apellido'] = $usuario['usuario'][0]['apellido'];
		$_SESSION['correo'] = $usuario['usuario'][0]['correo'];
		$_SESSION['imagen'] = $usuario['usuario'][0]['imagen'];

	  $data2['contador'][] = $contador1;

	}else{

	  $data2['contador'][] = $contador2;

	}

echo json_encode($data2);
   

?>