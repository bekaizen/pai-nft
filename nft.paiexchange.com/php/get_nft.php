<?php
require_once ("../config/connect.php");

// $sth = $connect->prepare("SELECT * FROM pai_nft");
// $sth->execute();
// $result = $sth->fetchAll();
// /* PDOStatement::FETCH_ASSOC */

// foreach ($result as $row) {
//     print_r($row);
// }

// Consultar a la base de datos
$sql = "SELECT * FROM pai_nft";
// Procesar la consulta
$results = $connect->query($sql);
// Buscar array
$nft = $results->fetch_all(MYSQLI_ASSOC);
// Liberar resultados
$results->free_result();



echo json_encode($nft);





$connect = null;

