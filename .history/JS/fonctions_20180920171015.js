function Exo1(){
    $.ajax(
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                $('#categories').empty();
                $('#categories').append(data);
            },
            error:function()
            {
                alert("Erreur sur la recuperation des categories");
            }
            


        }
    )
};


function AfficherLesServices(){
    $.ajax(
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstCategories').val(),
            success:function(data)
            {
                $('#services').empty();
                $('#services').append(data);
            },
            error:function()
            {
                alert("Erreur sur recuperation des services");
            }
            


        }
    )
};

function Exo2(){
    /*$.ajax(
        {
            type:"get",
            url:"PHP/getLesDeals.php",
            data:"id="+$('#lstDeals').val(),
            success:function(data)
            {
                $('#services').empty();
                $('#services').append(data);
            },
            error:function()
            {
                alert("Erreur sur recuperation des services");
            }
            


        }
    )*/
    <?php 
    echo "<input type='text' disabled='disabled' value='Quel est votre identifiant'/>";
    echo "<input type='text' id='lstDeals'/>";
    echo "<input type='button' value='Chercher les deals'/>";?>
};

