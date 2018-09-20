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

function voir(info)
{
  if (document.getElementById(info).style.display == 'block')
  {
       document.getElementById(info).style.display = 'non';
  }
  else
  {
       document.getElementById(id).style.display = 'block';
  }
}

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

};

