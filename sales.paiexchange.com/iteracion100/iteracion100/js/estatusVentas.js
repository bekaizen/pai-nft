$(document).ready(function(e) {
    // e.preventDefault();
    $.ajax({
        url:"php/estatusVentas.php", 
        type: "POST",    //request type,
        // dataType: 'json',
        success:function(ventas) {
            ventas = JSON.parse(ventas);
            // verificar si hay disponibilidad de resultados
            if(ventas.length > 0) {
                tablero = document.getElementById('tablero-estatus-ventas');
                var datos = "";

                datos += `
                    <tr>
                        <th>Cliente</th>
                        <th>Valor de compra (USDT)</th>
                        <th>Tasa de compra</th>
                        <th>Total en pesos (DOP)</th>
                        <th>Fecha de compra</th>
                        <th>Estatus de compra</th>
                    </tr>
                `
	            // Buscar en el resultados encontrados
	            $.each(ventas, function(string,sale) {
                    datos += `
                        <tr>
                            <td>` + sale.P_user + `</td>
                            <td>` + (sale.P_monto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</td>
                            <td>` + sale.P_tasa + `</td>
                            <td>` + (sale.P_monto * sale.P_tasa).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</td>
                            <td>` + sale.P_fecha_venta + `</td>
                            <td>` + sale.P_estatus + `</td>
                        </tr>
                    `
                });

                tablero.innerHTML = datos;
            }
        }
    });
});