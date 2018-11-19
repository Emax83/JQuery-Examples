<?
	$id = $_POST['id'];
	sleep(2);
	echo file_get_contents("p" . $id . ".txt");
?>