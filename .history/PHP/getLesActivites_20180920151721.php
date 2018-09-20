<?php 
    include 'cnx.php';
$sql= $cnx->prepare("select numero, libelle from activite");
$sql->execute();

foreach($sql->fetchAll(PDO::FETCH_NUM) as $ligne){
    /*echo "<div align='center'"."<p>".$ligne[1]."&nbsp;&nbsp;&nbsp;&nbsp;".$ligne[2]."&nbsp;&nbsp;&nbsp;&nbsp;".$ligne[4]."</p>"."</div>";*/
    echo "<table border>
    <tr>
        <td width=70% style='text-align: left; border: 1px solid black;'>
            <p>$ligne[1]</p>
        </td>
        <td style='text-align: right ; border: 1px solid black;'>
            <p>$ligne[2]</p>
        </td>
        <td style='text-align: right; border: 1px solid black;'>
            <p>$ligne[4]</p>
        </td>
    </tr>
</table>";
}

?>
