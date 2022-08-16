<?php
$PAI = $_REQUEST;
$SERVER   = "127.0.0.1";
$USERNAME = "root";
$PASSWORD = "";
$DATABASE = "pai";
$CHARSET = "utf8mb4";
$OPTIONS  = [
    \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES   => false,
];

$DSN = "mysql:host=$SERVER;dbname=$DATABASE;charset=$CHARSET";

try {
    $connect = new \PDO($DSN, $USERNAME, $PASSWORD, $OPTIONS);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}