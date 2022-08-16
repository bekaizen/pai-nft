<?php
require_once ("../config/connect.php");

$sth = $connect->prepare("SELECT * FROM pai_nft");
$sth->execute();
$result = $sth->fetchAll();
/* PDOStatement::FETCH_ASSOC */

$data = array();

foreach ($result as $row) {
    $data[] = array(
        "nombre"=>$row['P_nombre']
    );

    echo json_encode($data);
}

$connect = null;

