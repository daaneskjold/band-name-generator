$(document).ready(function () {

  $('#name').click(function(){
    $.get("http://localhost:3000/adjectives",function(response) {
      console.log(response);
      $('#adjective').text(response);
      $('#adjective').css('text-decoration','underline');
    //$('#adjective').text('hello, world');
    });
  });

  $('#name').click(function(){
    $.get("http://localhost:3000/nouns",function(response) {
      console.log(response);
      $('#noun').text(response);
      $('#noun').css('text-decoration','underline');
    });
  });

  $('#name').click(function(){
    $.get("http://localhost:3000/verbs",function(response) {
      console.log(response);
      $('#verb').text(response);
      $('#verb').css('text-decoration','underline');
    });
  });

  $('#name').hover(function() {
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "grey");
  });
});
