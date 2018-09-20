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
                alert("Erreur sur descategories");
            }
            


        }
    )
};



function AfficherLesServices(){
    $.ajax(
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstServices').val(),
            success:function(data)
            {
                $('#formations').empty();
                $('#formations').append(data);
            },
            error:function()
            {
                alert("Erreur sur recuperation des services");
            }
            


        }
    )
}

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

