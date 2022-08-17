function get_all() 
{
	// Ajax config
	$.ajax({
        type: "GET", 
        url: 'php/get_nft.php',
        success: function (response) {
            
            // Parsear resultados
        	response = JSON.parse(response);

            var html = "";
           
            // verificar si hay disponibilidad de resultados
            if(response.length) {
	            // Buscar en el resultados encontrados
	            $.each(response, function(key,value) {
                    
                    // Variable capturadora de id de contenido en la tabla
                    let nft_id = value.id;
                    // let valor_nft = value.P_valor;
                    // let decision_balance = ((valor_nft > balance_usuario) ? resultado_balance : "");

                    // Impresion de tarjeta NFT
					html += `
                    <div class="column pai_column">
                    <div class="card pai_card w3-col">
                        <div class="w3-display-container w3-text-white">
                                <img src="" alt="Lights" style="width:100%">
                            </div>
                            <h4 style="text-align:left; font-size:1rem; padding: 0 16px;" class="card-title">`+ value.P_nombre +`</h4>
                            <div class="w3-row" style="margin:14px 0;">
                                <div class="w3-col w3-container inversion" style="width:55%; text-align:left">
                                    <p><b>Inversion:</b></p>
                                    <p style="display:flex; align-items:center;"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="18" height="18"><path d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0" fill="#53ae94"/><path d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18" fill="#fff"/></svg>
                                        <!-- <b>USDT </b> -->
                                        <span class="monto">` + (value.P_valor).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</span>
                                    </p>
                                </div>
                                <div class="w3-col w3-container roi" style="width:45%; text-align:right">
                                    <p><b>ROI:</b></p> 
                                    <p><span>` + (value.P_ROI * 12)+ `</span>% Anual</p>
                                </div>
                            </div>
                            <button class="w3-button w3-indigo" onclick="document.getElementById('id`+ nft_id +`').style.display='block'" style="margin-bottom:16px; width:calc(100% - 24px); border-radius:6px;">VER MAS</button>
                        </div>
                        <div id="id`+ nft_id +`" class="w3-modal">
                            <div class="w3-modal-content w3-animate-zoom w3-card-4" style="width:500px; border-radius:12px; overflow: hidden; max-height: calc(100vh - 140px); overflow-y:auto">
                                <header class="w3-container" style="padding-top:16px; padding-bottom: 16px;"> 
                                    <span onclick="document.getElementById('id`+ nft_id +`').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                                    <h4 style="text-align:left; font-size:1rem;">HEAVING SKYSCRAPER</h4>
                                </header>


                                <span id="estado_de_balance"></span>
                    

                                
                                <div class="w3-container">
                                    <b>Seleccionar periodo de inversion</b>
                                    <form class="w3-container"  style="padding-left:0; padding-right:0;"">
                                        <ul class="w3-ul">
                                            <label for="id`+ nft_id +`checkbox" width="100%">
                                                <li class="w3-bar" style="padding-left:0; padding-right:0; border-bottom: 1px solid #ddd;">
                                                    <div style="display:flex; justify-content: space-between; align-items: center;">
                                                        <div class="w3-bar-item">
                                                            <span class="w3-large">6 MESES</span><br>
                                                            <span>
                                                                ROI: 
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" style="margin-bottom:-4px;" width="18" height="18"><path d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0" fill="#53ae94"/><path d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18" fill="#fff"/></svg>
                                                                <b>USDT</b>
                                                                <span class="eta-roi">`+ (((value.P_valor * value.P_ROI) / 100)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +`</span>
                                                                / MES
                                                            </span>
                                                        </div>
                                                        <input class="w3-radio" id="id`+ nft_id +`checkbox" type="radio" name="gender" value="male">
                                                    </div>
                                                </li>
                                            </label>
                                            <label for="id`+ (nft_id + 1) +`checkbox" width="100%">
                                                <li class="w3-bar" style="padding-left:0; padding-right:0; border-bottom: 1px solid #ddd;">
                                                    <div style="display:flex; justify-content: space-between; align-items: center;">
                                                        <div class="w3-bar-item">
                                                            <span class="w3-large">12 MESES</span><br>
                                                            <span>
                                                                ROI: 
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" style="margin-bottom:-4px;" width="18" height="18"><path d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0" fill="#53ae94"/><path d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18" fill="#fff"/></svg>
                                                                <b>USDT</b>
                                                                <span class="eta-roi">`+ (((value.P_valor * value.P_ROI) / 100)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +`</span>
                                                                / MES
                                                            </span>
                                                        </div>
                                                        <input class="w3-radio" id="id`+ (nft_id + 1) +`checkbox" type="radio" name="gender" value="male">
                                                    </div>
                                                </li>
                                            </label>
                                            <label for="id`+ (nft_id + 2) +`checkbox" width="100%">
                                                <li class="w3-bar" style="padding-left:0; padding-right:0;">
                                                    <div style="display:flex; justify-content: space-between; align-items: center;">
                                                        <div class="w3-bar-item">
                                                            <span class="w3-large">24 MESES</span><br>
                                                            <span>
                                                                ROI: 
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" style="margin-bottom:-4px;" width="18" height="18"><path d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0" fill="#53ae94"/><path d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18" fill="#fff"/></svg>
                                                                <b>USDT</b>
                                                                <span class="eta-roi">`+ (((value.P_valor * value.P_ROI) / 100)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +`</span>
                                                                / MES
                                                            </span>
                                                        </div>
                                                        <input class="w3-radio" id="id`+ (nft_id + 2) +`checkbox" type="radio" name="gender" value="male">
                                                    </div>
                                                </li>
                                            </label>
                                        </ul>
                                    </form>   
                                    <p>
                                        <button onclick="myFunction('terminosid`+ nft_id +`')" class="w3-button w3-block w3-left-align">
                                            <b>Terminos y condiciones</b>
                                        </button>
                                        <div id="terminosid`+ nft_id +`" class="w3-hide w3-container">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus reprehenderit perspiciatis cum nobis voluptas, eligendi et quisquam totam aperiam laboriosam unde quae ullam praesentium sunt repudiandae facere. Dolore, ab.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti animi quae, consectetur corporis deserunt id nisi ducimus magni quo quidem beatae, in porro. Quos iste totam molestiae corporis nulla?
                                            </p>
                                        </div>                                    
                                    </p>
                                    <button class="w3-button w3-indigo" onclick="document.getElementById('id`+ nft_id +`').style.display='block'" style="margin-bottom:16px; width:100%; border-radius:6px;">INVERTIR</button>
                                    <p style="padding-bottom:12px;">
                                        <span style="font-size:.80rem; color:#565656">Al presionar el boton "Invertir" el usuario esta de acuerdo con los terminos y condiciones del programa de inversion sobre NFT en la plataforma PAI EXCHANGE.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    `;
	            });
            } else {
            	html += '<div class="alert alert-warning">';
				  html += 'No se encontro nada!';
				html += '</div>';
            }

            

            // Insertar resultados
			$("#nft_card").html(html);
        }
    });
}

// ejecucion de funcion
$(document).ready(function(e) {
    get_all();
});