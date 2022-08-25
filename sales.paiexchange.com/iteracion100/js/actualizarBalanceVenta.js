$(document).ready(function() {
    // document.getElementById('pool-cerrado').style.display = 'block';
    $.ajax({
        url: 'php/balanceVenta.php',
        type: "POST",
        success: function(validar) {
            validar = JSON.parse(validar)
            var orden = document.getElementById('orden-compra').value;
            if ( validar.length > 0 ) {
                var valBalance = "";
                var minVenta = "";
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
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="150px" viewBox="0 0 463 463" style="enable-background:new 0 0 463 463;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M431.5,220h-28.893L252.546,69.939C254.113,66.792,255,63.248,255,59.5c0-12.958-10.542-23.5-23.5-23.5     S208,46.542,208,59.5c0,3.748,0.887,7.292,2.454,10.439L60.393,220H31.5C14.131,220,0,234.131,0,251.5v144     C0,412.869,14.131,427,31.5,427h400c17.369,0,31.5-14.131,31.5-31.5v-144C463,234.131,448.869,220,431.5,220z M231.5,51     c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5S226.813,51,231.5,51z M221.061,80.546     C224.208,82.113,227.752,83,231.5,83s7.292-0.887,10.439-2.454L381.393,220H81.607L221.061,80.546z M448,395.5     c0,9.099-7.402,16.5-16.5,16.5h-400c-9.098,0-16.5-7.401-16.5-16.5v-144c0-9.099,7.402-16.5,16.5-16.5h400     c9.098,0,16.5,7.401,16.5,16.5V395.5z"/>
                                                <path d="M63.5,291c6.991,0,13.248,4.427,15.569,11.017c1.376,3.905,5.661,5.956,9.565,4.582c3.907-1.377,5.958-5.659,4.582-9.566     C88.785,284.452,76.843,276,63.5,276C46.131,276,32,290.131,32,307.5v32c0,17.369,14.131,31.5,31.5,31.5     c13.327,0,25.265-8.438,29.705-20.998c1.38-3.905-0.666-8.19-4.571-9.571c-3.905-1.379-8.19,0.666-9.571,4.571     C76.737,351.58,70.483,356,63.5,356c-9.098,0-16.5-7.402-16.5-16.5v-32C47,298.402,54.402,291,63.5,291z"/>
                                                <path d="M151.5,356H119v-72.5c0-4.143-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5v80c0,4.143,3.358,7.5,7.5,7.5h40     c4.142,0,7.5-3.357,7.5-7.5S155.642,356,151.5,356z"/>
                                                <path d="M191.5,276c-17.369,0-31.5,14.131-31.5,31.5v32c0,17.369,14.131,31.5,31.5,31.5s31.5-14.131,31.5-31.5v-32     C223,290.131,208.869,276,191.5,276z M208,339.5c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5v-32     c0-9.098,7.402-16.5,16.5-16.5s16.5,7.402,16.5,16.5V339.5z"/>
                                                <path d="M263.5,316c-8.944,0-16.5-5.725-16.5-12.5c0-6.775,7.556-12.5,16.5-12.5c7.839,0,14.819,4.425,16.237,10.292     c0.973,4.025,5.023,6.5,9.052,5.528c4.026-0.973,6.501-5.025,5.528-9.052C291.27,285.155,278.309,276,263.5,276     c-17.369,0-31.5,12.337-31.5,27.5c0,15.163,14.131,27.5,31.5,27.5c8.944,0,16.5,5.725,16.5,12.5c0,6.775-7.556,12.5-16.5,12.5     c-7.839,0-14.819-4.425-16.237-10.292c-0.973-4.027-5.026-6.51-9.052-5.528c-4.026,0.973-6.501,5.025-5.528,9.052     C235.73,361.845,248.691,371,263.5,371c17.369,0,31.5-12.337,31.5-27.5C295,328.337,280.869,316,263.5,316z"/>
                                                <path d="M351.5,291c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-40c-4.142,0-7.5,3.357-7.5,7.5v80c0,4.143,3.358,7.5,7.5,7.5     h40c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H319v-25h24.5c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H319v-25H351.5z"/>
                                                <path d="M383.5,276h-8c-4.142,0-7.5,3.357-7.5,7.5v80c0,4.143,3.358,7.5,7.5,7.5h8c26.191,0,47.5-21.309,47.5-47.5     C431,297.309,409.691,276,383.5,276z M383.5,356H383v-65h0.5c17.92,0,32.5,14.579,32.5,32.5C416,341.421,401.42,356,383.5,356z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <br><br>
                                    </svg>
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
                } 
            }
        }
    })
})


$("#actualizarBalances").click(function() {
    $.ajax({
        url: 'php/balanceVenta.php',
        type: "POST",
        success: function(validar) {
            validar = JSON.parse(validar)

            var orden = document.getElementById('orden-compra').value;
            if ( validar.length > 0 ) {
                var minVenta = "";
                var valBalance = "";
                var maxVenta = "";
                $.each(validar, function(x, val) {
                    valBalance += val.P_venta
                    minVenta += val.P_venta_minima
                    maxVenta += val.P_venta_maxima
                })
            
                if ( Number(orden) < Number(minVenta) ) {
                    var poolMinimo = `
                        <div class="w3-modal" id="pool">
                            <div class="w3-display-middle w3-white w3-round w3-round-xlarge w3-animate-fade w3-card-2 w3-col l10 m10 s10">
                                <div class="w3-padding-16  reajuste w3-container" align="">
                                    <center>
                                        <b>Monto minimo no superado</b>
                                    </center>
                                    <br>
                                    <center>
                                        <p>Tu orden es de <b>` + (orden).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</b> y el monto minimo es de <b>` + (minVenta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</b> favor verifica el monto de orden e intentalo denuevo!</p>
                                    </center>
                                </div>
                                <div id="infoacept" class="cerrar-modal w3-col s12 m12 l12 w3-large w3-padding-16 w3-center w3-border-top w3-border-lightgrey w3-text-blue" 
                                    style="cursor:pointer" onclick="cerrarModal()">
                                    Aceptar
                                </div>
                            </div>
                        </div>
                    `;
                    document.getElementById('display-status').innerHTML = poolMinimo;
                    document.getElementById('pool').style.display = "block";
    
                } else if ( Number(orden) > Number(maxVenta) ) {
                
                    var poolMaximo = `
                        <div class="w3-modal" id="pool">
                            <div class="w3-display-middle w3-white w3-round w3-round-xlarge w3-animate-fade w3-card-2 w3-col l10 m10 s10">
                                <div class="w3-padding-16  reajuste w3-container" align="">
                                    <center>
                                        <b>Orden excesiva</b>
                                    </center>
                                    <br>
                                    <center>
                                        <p>Tu orden es de <b>` + (orden).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</b> y el monto disponible es de <b>` + (maxVenta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</b> favor verifica el monto de orden e intentalo denuevo!</p>
                                    </center>
                                </div>
                                <div id="infoacept" class="cerrar-modal w3-col s12 m12 l12 w3-large w3-padding-16 w3-center w3-border-top w3-border-lightgrey w3-text-blue" 
                                    style="cursor:pointer" onclick="cerrarModal()">
                                    Aceptar
                                </div>
                            </div>
                        </div>
                    `;
                    document.getElementById('display-status').innerHTML = poolMaximo;
                    document.getElementById('pool').style.display = "block";
                
                } else {

                    // $("#actualizarBalances").click( 
                    //     function(event) { 
                    //         event.preventDefault();
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

                                var poolCompraExitosa = `
                                    <div class="w3-modal" id="pool">
                                        <div class="w3-display-middle w3-white w3-round w3-round-xlarge w3-animate-fade w3-card-2 w3-col l10 m10 s10">
                                            <div class="w3-padding-16  reajuste w3-container" align="">
                                                <center>
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" fill="#00FF00" version="1.1" id="Capa_1" x="0px" y="0px" width="305.002px" viewBox="0 0 305.002 305.002" style="enable-background:new 0 0 305.002 305.002;" xml:space="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5    S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5    c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/>
                                                                <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678    l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385    c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/>
                                                            </g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        </svg>
                                                        <br/><br/>
                                                    <b>Orden procesada!</b>
                                                </center>
                                                <br>
                                                <center>
                                                    <p>Tu orden es de <b>` + (orden).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</b> esta siendo procesada por nuestro equipo y pronto estaran en contacto contigo para indicarte los pasos a seguir!</p>
                                                </center>
                                            </div>
                                            <div id="infoacept" class="cerrar-modal w3-col s12 m12 l12 w3-large w3-padding-16 w3-center w3-border-top w3-border-lightgrey w3-text-blue" 
                                                style="cursor:pointer" onclick="cerrarModal()">
                                                Aceptar
                                            </div>
                                        </div>
                                    </div>
                                `;
                                document.getElementById('display-status').innerHTML = poolCompraExitosa;
                                document.getElementById('pool').style.display = "block";
                            } else {
                                alert('Ocurrio un error !');
                            }
                        }
                    });
                }
            } 
        }
    });
})


function cerrarModal() {
    document.getElementById('pool').style.display = "none";
}