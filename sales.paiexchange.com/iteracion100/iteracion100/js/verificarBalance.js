// $(document).ready(function(e) {
//     // e.preventDefault();
//     $.ajax({
//         url:"php/balanceVenta.php", 
//         type: "POST",    //request type,
//         // dataType: 'json',
//         success:function(valBalance) {
//             valBalance = JSON.parse(valBalance);
//             let balanceActual = "";
//             // verificar si hay disponibilidad de resultados
//             if(valBalance.length > 0) {
// 	            // Buscar en el resultados encontrados
// 	            $.each(valBalance, function(string,balance) {
//                     balanceActual += balance.P_venta
//                 });

//                 if (balanceActual < 5000) {
//                     alert('creata'+ balanceActual)
//                 }
//             }
//         }
//     });
// });