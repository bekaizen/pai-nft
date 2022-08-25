$(document).ready(function() {
    // document.getElementById('pool-cerrado').style.display = 'block';

    $.ajax({
        url: 'php/balanceVenta.php',
        type: "POST",
        success: function(validar) {
            validar = JSON.parse(validar)

            if (validar.length > 0) {
                var valBalance = "";
                var minVenta = "";
                var orden = document.getElementById('orden-compra').value;
                $.each(validar, function(x, val) {
                    valBalance += val.P_venta
                    minVenta += val.P_venta_minima
                })

                if ( Number(valBalance) < Number(minVenta) ) {
                    
                    var poolCerrado = `
                        <div class="w3-modal" id="pool">
                            <div class="w3-display-middle w3-white w3-round w3-round-xlarge w3-animate-fade w3-card-2 w3-col l10 m10 s10">
                                <div class="w3-padding-16  reajuste w3-container" align="">
                                    <center>
                                        <b>POOL CERRADO</b>
                                    </center>
                                    <br>
                                    <center>
                                        <p>Actualmente el pool de compras se encuentra cerrado. verifica mas tarde!</p>
                                    </center>
                                </div>
                            </div>
                        </div>
                    `
                    document.getElementById('display-status').innerHTML = poolCerrado;
                    document.getElementById('pool').style.display = "block";

                } else {

                    $("#actualizarBalances").click( 
                        function(event) { 
                            event.preventDefault();
                            var disponibilidad = document.getElementById('disponibilidad').innerHTML;
                            var orden = document.getElementById('orden-compra').value;
                            var tasa = document.getElementById('tasa-venta').innerHTML;
                            var usuario = document.getElementById('usuario').innerHTML;
                            var montoActualizado = Number(disponibilidad - orden);
                            console.log("actualizando orden por monto de: " + montoActualizado);
                            
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
                                        if(!data.error) {
                                            // var old_balance = $('#balance').text();
                                            // $('#balance').text() = old_balance + 10;
                                            var nuevo_disponible = "";
                                            $.each(data, function(i, val) {
                                                // alert(val.P_venta);
                                                nuevo_disponible += (val.P_venta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " USDT";
                                            })
                
                                            $("#venta-disponible").html(nuevo_disponible);
                                        } else {
                                            alert('Ocurrio un error !');
                                        }
                                    } // success
                                });
                        } // end function
                    );

                }
            } else {
                console.log("no se encontraton datos")
            }
        }
    })
})