<?php
/*
 * Daho Mohamed
 * Get followers count fom FB & Twitter.
 */
// check submitted data
$val1 = (!empty($_REQUEST['val1']))?$_REQUEST['val1']:'';
$val2 = (!empty($_REQUEST['val2']))?$_REQUEST['val2']:'';

// Combine data into 1 multidimensional table
$lina  = array('name'=>'lina',  'birthday'=>'01/01/2001','city'=>'Sterling','state'=>'VA');
$sarah = array('name'=>'Sarah', 'birthday'=>'01/01/2004','city'=>'Ashburn','state'=>'VA');
$razan = array('name'=>'Razan', 'birthday'=>'01/01/2015','city'=>'Woodbridge','state'=>'VA');

$data = array(
		'record1'  => $lina, 
		'record2'  => $sarah,
		'record3'  => $razan,
		);
// JSON encode data and print it
print json_encode($data);
  
?>