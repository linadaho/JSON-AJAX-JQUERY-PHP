<?php
/*
 * Daho Mohamed
 * AJAX / JSON 
 * Version 1.1.0
 */
// check submitted data
$name1 = (!empty($_REQUEST['name1']))?$_REQUEST['name1']:'';
$name2 = (!empty($_REQUEST['name2']))?$_REQUEST['name2']:'';
$name3 = (!empty($_REQUEST['name3']))?$_REQUEST['name3']:'';

// Combine data into 1 multidimensional table
$lina  = array('name'=>$name1 ,  'birthday'=>'01/01/2001','city'=>'Sterling','state'=>'VA');
$sarah = array('name'=>$name2 , 'birthday'=>'01/01/2004','city'=>'Ashburn','state'=>'VA');
$razan = array('name'=>$name3 , 'birthday'=>'01/01/2015','city'=>'Woodbridge','state'=>'VA');

$data = array(
		'record1'  => $lina, 
		'record2'  => $sarah,
		'record3'  => $razan,
		);
// JSON encode data and print it
print json_encode($data);
  
?>
