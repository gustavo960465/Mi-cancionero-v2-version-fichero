<?php

session_start();

      $id = $_POST['id'];
      $repertorioPersonal1 = "../repertorioPersonal1/repertorioPersonal1.json";
      
      if(isset($id)){
          unlink($repertorioPersonal1);
          echo "1";
      }
      
    ?>
