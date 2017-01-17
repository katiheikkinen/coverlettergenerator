
//this just prints out the choices of the user
$(document).ready(function(){
  $('.button-primary').click(function(){
    var profession = $('select.u-pull-left option:selected').text();
    var placetowork = $('#placetoworkInput').val();
    var nextstepsentence = getRandomSentence(nextstepsentences);
    var thankyousentence = getRandomSentence(thankyousentences);

      $(".coverlettertext").append('<p id="greetings">Dear sir or madam</p>');
      $(".coverlettertext").append('<p id="position">Re: ' + profession + ' position</p>');
      $(".coverlettertext").append('<p id="introduction">I would like to express my strong interest in the ' +
      profession + ' position at ' + placetowork + ', as listed on LinkedIn. I am confident that my previous success as a '
      + profession + ', as well as my strong communication and collaboration skills, make me an ideal candidate for the position.</p>');
      $(".coverlettertext").append('<p id="skills1">I have been involved in numerous large-scale software releases and understand the importance of time management and open communication. While it may be easy to focus on the technical side of work, I’ve found that being able to express concerns and alternative solutions to colleagues of varying technical backgrounds has been invaluable in my professional development.</p>');
      $(".coverlettertext").append('<p id="skills2">I am a conscientious person who works hard and pays attention to detail. I am flexible, quick to pick up new skills and eager to learn from others. I also have lots of ideas and enthusiasm. I am keen to work for a company with a great reputation and high profile like ' + placetowork + '.</p>');
      $(".coverlettertext").append('<p id="nextsteps">' + nextstepsentence + '</p>');
      $(".coverlettertext").append('<p id="thanks">' + thankyousentence + '</p>');


     $(".list").append('<div class="item">' + profession + '</div>');
    $(".list").append('<div class="item">' + placetowork + '</div>');
  });
});






/*var Trianglify = require('trianglify'); // only needed in node.js

/*var pattern = Trianglify({
  height: 60,
  width: 60,
  cell_size: 10});

document.body.appendChild(pattern.canvas());*/
