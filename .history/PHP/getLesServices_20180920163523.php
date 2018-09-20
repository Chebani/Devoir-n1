<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select idService, nomService from service where idCateg=".$_GET['id']);
$sql->execute();
echo "<select id='lstServices'>";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<p>".$ligne['idService']."'>".$ligne['nomService']."</p>";
}
echo "</select>";
?>