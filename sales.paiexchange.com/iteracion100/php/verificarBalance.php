<?php
require_once ("../config/connect.php");

// Consultar a la base de datos
// $sql = "SELECT * FROM pai_nft, pai_balance WHERE P_user = '" . $user . "'";
$sql = "SELECT P_venta, P_venta_minima FROM pai_ventas";
// Procesar la consulta
$results = $connect->query($sql);
// Buscar array
$ventas = $results->fetch_all(MYSQLI_ASSOC);
// Liberar resultados
$results->free_result();

echo json_encode($ventas);

do {
    if ($result = $connect->store_result()) {
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
        $result->free();
    }
} while ($connect->next_result());

$connect = null;