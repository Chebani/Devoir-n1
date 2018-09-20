function AfficherLesTickets(){

   
   /* alert($('button[class=lien]').prop("checked", true).val());*/
    $.ajax
    (
        {
            
            type:"GET",
            url:"../php/GetLesTickets.php",
            data:"ticketsDe="+$('button[name=ticketUser]').prop("checked", true).val(), 
            success:function(data)
            {
                $('#lesTickets').empty();
                $('#lesTickets').append(data);
            },
            error:function()
            {
                alert("Erreur sur la recuperation des tickets");
            }
        }
    );
}
