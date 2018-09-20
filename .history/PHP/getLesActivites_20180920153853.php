<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select numero, libelle from activite");
$sql->execute();
echo "<select id='lstActivites' onchange='Exo3'>";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['numero']."'>".$ligne['libelle']."</option>";
}
echo "</select>";
?>
