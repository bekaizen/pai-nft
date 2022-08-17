$('document').ready(function(){
    // var username = $(this).val();
    $.ajax ({
        url : "php/get_balance.php",
        method : "GET",
        success:function(balance) {
            $('#estado_de_balance').html(balance.P_monto);
        }, error:function(jqXHR, textStatus, errorThrown) {
            $('#estado_de_balance').html(errorThrown);
        }
    });
});