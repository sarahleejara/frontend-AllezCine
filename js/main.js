$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");

    // Hide the Modal
    $("#myBtn").click(function(){
        $("#myModal").modal("hide");
    });
});
$("#submitage").click(function(){
  var a = $("#Age").val();
    if ( a <= 18){
    $(this).hide();
  } else {
    alert("I'm sorry you must be 18 to access this website.")
  }
})
