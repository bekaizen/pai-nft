<?php
require_once ("../config/connect.php");

// Consultar a la base de datos
// $sql = "SELECT * FROM pai_nft, pai_balance WHERE P_user = '" . $user . "'";
$sql = "SELECT * FROM pai_ventas";
// Procesar la consulta
$results = $connect->query($sql);
// Buscar array
$usdt = $results->fetch_all(MYSQLI_ASSOC);
// Liberar resultados
$results->free_result();

echo json_encode($usdt);

$connect = null;