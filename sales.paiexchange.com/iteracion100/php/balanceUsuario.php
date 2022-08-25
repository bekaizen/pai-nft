<?php
require_once ("../config/connect.php");

$user = 12;
// Consultar a la base de datos
$sql = "SELECT * FROM pai_balance WHERE P_user = '" . $user . "'";
// $sql = "SELECT * FROM pai_balance";
// Procesar la consulta
$results = $connect->query($sql);
// Buscar array
$balance = $results->fetch_all(MYSQLI_ASSOC);
// Liberar resultados
$results->free_result();

echo json_encode($balance);

$connect = null;