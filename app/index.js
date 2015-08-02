'use strict';

$(function() {

  $('#name').click(function() {
    $.get('adjectives', function(response) {
      $('#adjective').text(response);
      $('#adjective').css('text-decoration', 'underline');
    });
  });

  $('#name').click(function() {
    $.get('nouns', function(response) {
      $('#noun').text(response);
      $('#noun').css('text-decoration', 'underline');
    });
  });

  $('#name').click(function() {
    $.get('verbs', function(response) {
      $('#verb').text(response);
      $('#verb').css('text-decoration', 'underline');
    });
  });

  $('#name').hover(function() {
    $(this).css('background-color', 'orange');
  }, function() {

    $(this).css('background-color', 'grey');
  });

  $('#showWords').hover(function() {
    $(this).css('background-color', 'orange');
  }, function() {

    $(this).css('background-color', 'grey');
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();
    var userAdjective = $('[name=adjective]').val();
    var userNoun = $('[name = noun]').val();
    var userVerb = $('[name = verb]').val();
    var adjPost;

    $('#wordsSummary').html('');

    if (userAdjective) {
      adjPost = {word: userAdjective};
      $.post('userAdjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if (userNoun) {
      adjPost = {word: userNoun};
      $.post('userNoun', adjPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }

    if (userVerb) {
      adjPost = {word: userVerb};
      $.post('userVerb', adjPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }
  });

  $('#showWords').click(function() {
    $.get('showWords', function(response) {
      $('#wordsSummary').html(response);
    });
  });

});
