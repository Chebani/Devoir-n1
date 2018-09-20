<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select code, intitule from formation where numeroActivite=".$_GET['id']);
$sql->execute();
echo "<select id='lstFormation' >";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['code']."'>".$ligne['intitule']."</option>";
}
echo "</select>";
?>