<?php 
    include 'cnx.php';
/*$sql= $cnx->prepare("select idDeal, dateDeal , idEtat, idCreateur from deal where idCreateur=".$_GET['id']);*/
$sql= $cnx->prepare("select idDeal, dateDeal , nomEtat from deal join etat on deal.idEtat=etat.idEtat where idCreateur=".$_GET['id']);
$sql->execute();
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo $ligne['idDeal']."------".$ligne['dateDeal']."------".$ligne['nomEtat']."<br>";
}

?>