<?php
$image = $_POST['image'];
$path = '../uploads/' . $_POST['id'];
if (!is_dir($path)) mkdir($path);
$decoded = base64_decode(str_replace('data:image/png;base64,','',$image));
file_put_contents($path . '/preview.png', $decoded);
?>