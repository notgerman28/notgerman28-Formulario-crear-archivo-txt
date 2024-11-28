<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
        $nombre = trim($_POST["nombre"]);
        $correo = trim($_POST["correo"]);
        $telefono = trim($_POST["telefono"]);
        $sexo = trim($_POST["genero"]);
        $comentarios = trim($_POST["comentarios"]);

        $comentarios = empty($comentarios) ? "vacio" : $comentarios;

        $datos = "$nombre|$correo|$telefono|$sexo|$comentarios\n";
        
        $archivo = fopen("prueba.txt", "a");
        if ($archivo) {
            fwrite($archivo, $datos);
            fclose($archivo);
            echo "Datos guardados correctamente.";
        } else {
            echo "Error al guardar los datos.";
        }
    } else {
        echo "Método no permitido.";
    }
?>