$(document).ready(function () {

  $('#name').click(function(){
    $.get("http://localhost:3000/adjectives",function(response) {
      console.log(response);
      $('#adjective').text(response);
      $('#adjective').css('text-decoration','underline');
    //$('#adjective').text('hello, world');
    });
  });

  $('#name').hover(function() {
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "grey");
  });
});
