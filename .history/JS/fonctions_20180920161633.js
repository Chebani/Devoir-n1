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
                alert("Erreur sur les activités");
            }
            


        }
    )
};

function Exo2(){
    $.ajax(
        {
            type:"get",
            url:"",
            success:function()
            {

            },
            error:function()
            {

            }
            


        }
    )
};

function AfficherLesFormations(){
    $.ajax(
        {
            type:"get",
            url:"PHP/getLesFormations.php",
            data:"id="+$('#lstActivites').val(),
            success:function(data)
            {
                $('#formations').empty();
                $('#formations').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
            


        }
    )
}

