$( document ).ready(function() {
    var userInput ="";
    $( "#Submit" ).click(function(){

        userInput=$("#cityId").val();
        console.log(userInput)
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+userInput+"&appid=9ef5a8c0a9f360fcd04b4b54945cddee",
            success: function(response){
                console.log(response);
                $("#cityName").text(response.name);
                $("#cityTemp").text(response.main.temp);
                $("#cityHumidity").text(response.main.humidity);
                $("#cityWS").text(response.wind.speed)
            }

            
        })
    })
  
});

$( document ).ready(function() {
    var userInput ="";
    $( "#Submit" ).click(function(){

        userInput=$("#cityId").val();
        console.log(userInput)
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast?q="+userInput+"&appid=9ef5a8c0a9f360fcd04b4b54945cddee",
            success: function(response){
                console.log(response);
              
            }

            
        })
    })
  
});

$( document ).ready(function() {
    var userInput ="";
    $( "#Submit" ).click(function(){

        userInput=$("#cityId").val();
        console.log(userInput)
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/uvi/forecast?l"+userInput+"&appid=9ef5a8c0a9f360fcd04b4b54945cddee",
            success: function(response){
                console.log(response);
              
            }

            
        })
    })
  
});
