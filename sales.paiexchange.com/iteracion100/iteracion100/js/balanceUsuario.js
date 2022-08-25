$(document).ready(function(e) {
    // e.preventDefault();
    $.ajax({
        url:"php/balanceUsuario.php", 
        type: "POST",    //request type,
        // dataType: 'json',
        success:function(balance) {
            balance = JSON.parse(balance);
            // verificar si hay disponibilidad de resultados
            if(balance.length > 0) {
	            // Buscar en el resultados encontrados
	            $.each(balance, function(string,monto) {
                    document.getElementById('usuario').innerHTML = monto.P_user
                    $("#balance-disponible").html((monto.P_monto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " USDT" )
                    console.log(monto.P_monto)
                    console.log(monto.P_user)
                });
            }
        }
    });
});