$(document).on('click','#showData',function(e){
  $.ajax({    
    type: "GET",
    url: 'http://localhost:80/maynip/Createac/backendcall.php',             
    dataType: "html",                  
    success: function(data){                    
        $("#table-container").html(data); 
       
    }
});
});