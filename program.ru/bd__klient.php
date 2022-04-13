<?php

$mysql = new mysqli('127.0.0.1', 'root','root','programm__training');

if(!$mysql){
	echo "ERROR BABY";
}

$name = $_POST['username'];
$number = $_POST['usernumber'];

if(isset($_POST['login']) && isset($_POST['password'])){
	$login = $_POST['login'];
	$password = $_POST['password'];
}




$mysql->query("INSERT INTO `klient` (`id`, `name`, `number`) VALUES (NULL, '$name', '$number')");


header('location: /');