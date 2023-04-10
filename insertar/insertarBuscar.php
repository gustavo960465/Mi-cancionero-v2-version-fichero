<?php

session_start();


    require "conexion.php";

      $salida= array();
      $consulta = $conexion->query("SELECT * FROM cancion WHERE id_usuario='".$_SESSION['id']."'");

      if(isset($_POST['consulta'])){
          $buscar = $conexion->real_escape_string($_POST['consulta']);
          $consulta = $conexion->query("SELECT * FROM cancion WHERE titulo LIKE '%".$buscar."%'");
      }
    
    
    $resultadoNum = $consulta->num_rows;
    
    if($resultadoNum > 0){
        while($resultadoString = $consulta->fetch_array()){
          $salida[].= $resultadoString['titulo'];
        }
      }

            echo json_encode($salida);

      $conexion->close();      
      
  
    ?>
