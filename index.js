$( document ).ready(function() {
    console.log( "ready!" );
    
    $( "#nameform" ).submit( function() {
        $("#jumbotron").html("<p> Hello, " + document.getElementById("fname").value + " " + document.getElementById("lname").value + "</p>");
    });
});