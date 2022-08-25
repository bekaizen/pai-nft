$(document).ready(function(e) {
    // e.preventDefault();
    $.ajax({
        url:"php/balanceVenta.php", 
        type: "POST",    //request type,
        // dataType: 'json',
        success:function(data) {
            data = JSON.parse(data);
            let minimo = "";
            let maximo = "";
            // verificar si hay disponibilidad de resultados
            if(data.length > 0) {
	            // Buscar en el resultados encontrados
	            $.each(data, function(string,usdt) {
                    document.getElementById('tasa-venta').innerHTML = usdt.P_tasa_venta;
                    document.getElementById('disponibilidad').innerHTML = usdt.P_venta;
                    document.getElementById('minimo-venta').value = (usdt.P_venta_minima).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById('maximo-venta').value = (usdt.P_venta_maxima).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    
                    minimo = usdt.P_venta_minima;
                    maximo = usdt.P_venta_maxima;
                    $("#venta-disponible").html((usdt.P_venta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + usdt.P_moneda)
                    console.log(usdt.P_venta)
                });

                
                $("#minimo").click(function() {
                    document.getElementById("orden-compra").value = minimo;
                })
                
                $("#maximo").click(function() {
                    document.getElementById("orden-compra").value = maximo;
                })
            }
        }
    });
});