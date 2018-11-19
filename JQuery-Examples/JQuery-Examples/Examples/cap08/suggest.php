[
<? 
	$search = $_GET['search'];
	
	$tags = file ("words.italian.txt");
	
	$list = "";
	
	$k = 0;
	for ($i = 0; $i < count($tags); $i++) {
		$initial = substr(
			$tags[$i], 0, strlen($search));
			
		if ($initial == $search) {
			$list .= '"';
			$list .= trim($tags[$i]);
			$list .= '"';
			$k++;
			
			if ($k > 6) {
				break;
			}
			
			$list .= ',';
		}
	}

	if (substr($list, strlen($list)-1, 1) 
			== ',') {
			
		$list = substr(
			$list, 0, strlen($list)-1);
	}
	
	echo $list;
?>
]