function display_all() 
{
	// Ajax config
	$.ajax({
        type: "GET", 
        url: '../php/get_nft.php',
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
                    
                    // <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-white w3-xlarge w3-right"></span>
                    // Impresion de tarjeta NFT
					html += `
                        <li class="w3-bar">
                            <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">
                                <i class="material-icons">delete</i>
                            </span>
                            <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">
                                <i class="material-icons">edit</i>
                            </span>
                            <img src="`+ value.P_ruta_imagen +`" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                            <div class="w3-bar-item">
                            <span class="w3-large">`+ value.P_nombre +`</span><br>
                            <span>`+ value.P_valor +`</span>
                            </div>
                        </li>
                    `;
                    
	            });
            } else {
            	html += '<div class="alert alert-warning">';
				  html += 'No se encontro nada!';
				html += '</div>';
            }

            

            // Insertar resultados
			$("#display_nft").html(html);
        }
    });
}

// ejecucion de funcion
$(document).ready(function(e) {
    display_all();
});