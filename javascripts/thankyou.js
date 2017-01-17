//return a random number between 1-4

var nextstepsentences = [
  "I have enclosed my resume and will contact you next week to see if we might find a time to speak together.",
  "I have excellent references and would be delighted to discuss any possible vacancy with you at your convenience. In case you do not have any suitable openings at the moment, I would be grateful if you would keep my CV on file for any future possibilities.",
  "I would enjoy having the opportunity to talk with you more about this position, and how I could use my skills more to benefit your organization."
];

var thankyousentences = [
  "Thank you for considering my application. I look forward to hearing from you.",
  "Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.",
  "Thank you so much for your time and consideration.",
  "Thank you for taking the time to consider this application and I look forward to hearing from you in the near future."
];

function getRandomSentence (array) {
  var index = Math.floor(Math.random() * (array.length - 1));
  return array[index];
}

//var number = Math.floor((Math.random() * 4) + 1);

/*




*/
