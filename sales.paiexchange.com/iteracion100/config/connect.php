<?php
$servername = "localhost"; // Nombre de servidor
$username = "root"; // Nombre de usuario
$password = ""; // Contrasena de base de datos
$dbname = "pai"; // nombre de base de datos

$connect = new mysqli($servername, $username, $password, $dbname);

if ($connect->connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
  exit();
}