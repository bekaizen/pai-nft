// GET DATA FROM MYSQL DATABASE
$(document).ready(function(e) {
    // Ajax config
	$.ajax({
        type: "GET", //we are using GET method to get all record from the server
        url: 'php/get_nft.php', // get the route value
        success: function (response) {//once the request successfully process to the server side it will return result here 
            
        	// response = $.parseJSON(response);

            var html = "";
            // Check if there is available records
            if(response.length) {
	            // Loop the parsed JSON
	            $.each(response, function(key,value) {
                    html+= value.nombre
	            });
            } else {
            	html += '<div class="alert alert-warning">';
				  html += 'No records found!';
				html += '</div>';
            }
            // Parse the json result

            // Insert the HTML Template and display all employee records
			$("#example").html(html);
        },
        error: function (e) {
            console.log('error fatal');
        }
    });
    // $.ajax({
    //     type: "GET",
    //     url: "php/get_nft.php",
    //     data: [],
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",                    
    //     cache: false,                       
    //     success: function(response) {   

            
    // //     },
        
    // });  
    return false;
});