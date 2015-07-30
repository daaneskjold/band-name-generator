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


  $('#submitWords').on('submit',function(e){
    e.preventDefault();
    var userAdjective = $('[name=adjective]').val();
    var userNoun = $('[name = noun]').val();
    var userVerb = $('[name = verb]').val();
    var adjPost;

    if (userAdjective){
      adjPost = {word: userAdjective};
      $.post('userAdjective', adjPost, function(response){
        var adjectiveRes = response.msg;
        console.log(response.msg)
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if (userNoun){
      adjPost = {word: userNoun};
      $.post('userNoun', adjPost, function(response){
        var nounRes = response.msg;
        console.log(response.msg)
        $('#nounRes').text(nounRes);
      });
    }

    if (userVerb){
      adjPost = {word: userVerb};
      $.post('userVerb', adjPost, function(response){
        var verbRes = response.msg;
        console.log(response.msg)
        $('#verbRes').text(verbRes);
      });
    }

  });
});
