<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

//$x="SELECT count(*)FROM student";
//echo $x;

$x=$input['level'];
$sql = "SELECT * FROM student where level='$x'"; 
  

/*
    if ($result) 
    { 
        // it return number of rows in the table. 
        $row = mysqli_num_rows($result); 
       
          
      //  printf("Number of row in the table : " . $row); 
        printf("\n");
        echo "\n";
    
        // close the result. 
        mysqli_free_result($result); 
    } 
    echo json_encode($row);

    */
    $result = mysqli_query($link,$sql);
    $row = $result->fetch_array(MYSQLI_ASSOC);
    $num_records = mysqli_num_rows($result);
    $numRec = array();
    IF ($num_records >= 0){
    
       // $numRec = array();
       $numRec[]=$num_records;
        echo json_encode($numRec);
    
      
    }

    //echo "<p>ahlam</p>";


  /*
$myArray = array();
$x=array();
if ($result = $link->query($sql)) {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
        $myArray[] = $row;  
          //$x[] =$result->count($row);   
        
    }
    echo json_encode($myArray);
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

*/
mysqli_close($link);
?>