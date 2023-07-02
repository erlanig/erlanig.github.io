<?php
$servername = 'localhost:3307';
$database = 'db_porto';
$username = 'root';
$password = '';

$conn = mysqli_connect($servername, $username, $password, $database);

// Memeriksa koneksi ke database
if (!$conn) {
    die("Koneksi ke database gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi ke database berhasil";
}
?>
