$(document).ready(function() {
    $(".design").click(function() {
      $(".para1").toggle();
      $(".design").hide();     
    });    
    $(".para1").click(function() {
      $(".design").toggle();
      $(".para1").hide();     
    });

    $(".development").click(function() {
      $(".para2").toggle();
      $(".development").hide();
     
        

    });

    $(".para2").click(function() {
      $(".development").toggle();
      $(".para2").hide();
    });
    $(".project").click(function() {
      $(".para3").toggle();
      $(".project").hide();
      

    });
    $(".para3").click(function() {
      $(".project").toggle();
      $(".para3").hide();
      

    });
    $("form").submit(function(){
      event.preventDefault()
      var name = $("#name").val();
      var email =$("#email").val();
      var messege =$("#name").val();
      alert(name  +"  we have received your message. Thank you for reaching out to us." );
    })
   
    

  });
  $("#try").mouseenter(function(){
    $("#jone").show();
  });
  $("#try").mouseleave(function(){
    $("#jone").hide()
  });