<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select idService, dateDeal , idEtat, idCreateur from deal where idCreateur=".$_GET['id']);
$sql->execute();
echo "<input type='text' disabled='disabled' value='Quel est votre identifiant'/>";
echo "<input type='text'/>";
echo "<input type='button' value='Chercher les deals'/>";/*"<select id='lstServices'>";*/
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['idService']."'>".$ligne['nomService']."</option>";
}
echo "</select>";
?>