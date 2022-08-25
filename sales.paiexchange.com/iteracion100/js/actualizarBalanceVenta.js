$(document).ready(function() {
    // document.getElementById('pool-cerrado').style.display = 'block';
    $("#actualizarBalances").click( 
        function(event) { 
            event.preventDefault();
            var orden = document.getElementById('orden-compra').value;
            var tasa = document.getElementById('tasa-venta').innerHTML;
            var usuario = document.getElementById('usuario').innerHTML;
            $.ajax({ // method
                url:  "php/actualizarBalanceVenta.php",
                type: "POST",
                data: { 
                    nuevo_balance: orden,
                    usuario: usuario, 
                    tasa: tasa
                },
                success: function(data) {
                    data = JSON.parse(data)
                    if (!data.error) {
                        var nuevo_disponible = "";
                        var minimo = "";
                        var disponibilidad = document.getElementById('disponibilidad').innerHTML;
                        var montoActualizado = Number(disponibilidad - orden);
                        console.log("actualizando orden por monto de: " + montoActualizado);
                        $.each(data, function(i, val) {
                            // alert(val.P_venta);
                            nuevo_disponible += (val.P_venta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " USDT";
                            minimo += val.P_minimo_venta
                        });

                        if ( orden < minimo ) {
                            alert('El monto minimo de compra es de'+ minimo +' USD')
                            return false;
                        } else if ( orden > nuevo_disponible) {
                            alert('Actualmente el balance disponible es inferior a tu orden de compra');
                            return false;
                        } else {

                        }

                        $("#venta-disponible").html(nuevo_disponible);
                    } else {
                        alert('Ocurrio un error !');
                    }
                } // success
            });
        }// end function
    );
})