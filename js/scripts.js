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
    $(".form").submit(function(){
      event.preventDefault()
      var name = document.getElementsByClassName("name").innerHTML=Text;
      var email = document.getElementsByClassName("email").innerHTML=email;
      var messege = document.getElementsByClassName("messsage").innerHTML=Text;
      alert(name);
    })
   
    

  });
  $('#part1').mouseenter(function(){
    $('.text-within').filter("#text-title").show("slow");
  }).mouseleave(function(){
    $('#text-title').hide("slow");
  });