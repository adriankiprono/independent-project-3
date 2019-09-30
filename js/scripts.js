$(document).ready(function() {
    $(".design").click(function() {
      $(".para1").toggle();      
    });
    $(".development").click(function() {
        $(".para2").toggle();
    });
    $(".project").click(function() {
        $(".para3").toggle();
    });
    $("form").submit(function(){
      event.preventDefault()
      var name = $("#name").val();
      var email =$("#email").val();
      var messege =$("#name").val();
      alert(name +"  we have received your message. Thank you for reaching out to us." );
    })
   
    

  });
  $('#part1').mouseenter(function(){
    $('.text-within').filter("#text-title").show("slow");
  }).mouseleave(function(){
    $('#text-title').hide("slow");
  });