<?php
// read contents from the input stream
$inputHandler = fopen('php://input', "r");
// create a temp file where to save data from the input stream
$fileHandler = fopen('../uploads/img.jpg', "w+");

// save data from the input stream
while(true) {
	$buffer = fgets($inputHandler, 4096);
	if (strlen($buffer) == 0) {
		fclose($inputHandler);
		fclose($fileHandler);
		return true;
	}

	fwrite($fileHandler, $buffer);
}

// done
?>