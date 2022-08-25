<?php
require_once ("../config/connect.php");

$nuevoBalance = $_POST["nuevo_balance"];
$usuario = $_POST["usuario"];
$tasa = $_POST["tasa"];

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$sql = "UPDATE pai_ventas SET P_venta = P_venta - '$nuevoBalance', P_fecha_actualizacion = now() WHERE P_id = 1; 
        INSERT INTO pai_registro_ventas (P_user, P_monto, P_tasa, P_estatus) VALUES ('$usuario', '$nuevoBalance', '$tasa', 1);
        SELECT P_venta, P_venta_minima FROM pai_ventas";

$connect->multi_query($sql);

do {
  if ($result = $connect->store_result()) {
      echo json_encode($result->fetch_all(MYSQLI_ASSOC));
      $result->free();
  }
} while ($connect->next_result());
?>