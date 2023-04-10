<?php

session_start();




		$correo = $conexion->real_escape_string($_POST['correo']);
		$titulo = $conexion->real_escape_string($_POST['tituloSoporteTecnico']);
        $sugerencia = $conexion->real_escape_string($_POST['cajaSoporteTecnico']);



		$consulta = $conexion->query("SELECT * FROM usuario WHERE id = '".$_SESSION['id']."'");

		$resultadoString = $consulta->fetch_array();

		$count = $consulta->num_rows;

		



		if($correo == $correo) {



			$para      = $correo;

			$titulo    = $titulo;

			$mensaje   = $sugerencia;

			$cabeceras = 'From:' . $resultadoString['correo'] . "\r\n" .

				'Reply-To: micancioneroweb@gmail.com' . "\r\n" .

				'X-Mailer: PHP/' . phpversion();



			mail($para, $titulo, $mensaje, $cabeceras);

		

			echo "1";



		}else{



			echo "2";



		}

	

	?>