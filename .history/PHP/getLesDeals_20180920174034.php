<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select idDeal, dateDeal , idEtat, idCreateur from deal where idCreateur=".$_GET['id']);
$sql->execute();
$etat = $_GET['id'];
if ($etat == 1){
    $etat = "En cour";
}elseif ($etat == 2){
    $etat = "Termine";
}
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo $ligne['idDeal']."------".$ligne['dateDeal']."------".$_GET['id']."<br>";
}

?>