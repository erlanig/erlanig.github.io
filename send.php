<?php
require 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Membuat koneksi ke database
  $conn = mysqli_connect($servername, $username, $password, $database);

  // Memeriksa koneksi ke database
  if (!$conn) {
    die("Koneksi ke database gagal: " . mysqli_connect_error());
  }

  $query_sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

  if (mysqli_query($conn, $query_sql)) {
    header("Location: ".$_SERVER['HTTP_REFERER']);
    exit();
  } else {
    echo "Maaf, terjadi kesalahan: " . mysqli_error($conn);
  }

  mysqli_close($conn);
}
?>
