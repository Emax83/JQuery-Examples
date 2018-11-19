<? 
	$utente = $_POST['fieldValue'];
	
	sleep(2);
	
	$utenti = file ("utenti");  			
	$trovato = false;
	
	for ($i = 0; $i < count($utenti); $i++) {
		$linea = $utenti[ $i ];
		
		$dati = split(";", $linea);
		
		if ($utente == $dati[ 0 ]) {
			$trovato = true;
			break;
		}
	}
	
	if ($trovato) {
		echo 'KO';
	} else {
		echo 'OK';
	}
?>
