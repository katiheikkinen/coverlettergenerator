
$(document).ready(function(){
  $('.button-primary').click(function(){

    var profession = $('select.u-pull-left option:selected').text();
    var placetowork = $('#placetoworkInput').val();

    function createIntroductionSentence (){
        return "I am writing to apply for the position of " + profession + " at " + placetowork + ".";
    };

    function createIntroductionSentence2 (){
        return "This letter is to express my interest in your posting on LinkedIn for an experienced, results-oriented, highly-organized " + profession + ".";
    };

    function createIntroductionSentence3 (){
        return "I confidently express my interest in your posting on LinkedIn for an experienced " + profession + ".";
    };

    function createIntroductionSentence4 (){
        return "I would like to express my strong interest in the " + profession + " position at " + placetowork + ", as listed on LinkedIn. I am confident that my previous success as a " + profession + ", as well as my strong communication and collaboration skills, make me an ideal candidate for the position."
    };

    var introductionsentences = [
      createIntroductionSentence(),
      createIntroductionSentence2(),
      createIntroductionSentence3(),
      createIntroductionSentence4()
    ];

    function createSkills1Sentence (){
      return "Top notch development skills are a must in the fast-paced world of retail and I pride myself as a very effective " + profession + ".";
    };

    var skillsonesentences = [
      createSkills1Sentence(),
      "With several years of experience leading high-profile, high-pressure software releases, I have the experience, skills, and results-driven attitude to succeed in this role at your organization.",
      "I have been involved in numerous large-scale software releases and understand the importance of time management and open communication. While it may be easy to focus on the technical side of work, I’ve found that being able to express concerns and alternative solutions to colleagues of varying technical backgrounds has been invaluable in my professional development."
    ];

    function createSkills2Sentence () {
      return "Over the course of my career as a " + profession + " I have become a certified " + profession + " Professional, led two successful software releases as the Java team leader, and increased team efficiency by implementing Agile methodologies."
    };
    function createSkills2Sentence2 (){
      return "I am a conscientious person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills and eager to learn from others. I also have lots of ideas and enthusiasm. I am keen to work for a company with a great reputation and high profile like " + placetowork + ".";
    };
    function createSkills2Sentence3 (){
      return "I value my role in an organization and aspire to help others interested in becoming a " + profession + ". I am active in various professional organizations and continuously look for methods to improve the processes.";
    };
    function createSkills2Sentence4 (){
      return "I am confident that my experience, as well as my ability to collaborate and communicate, make me a strong candidate for the " + profession + " position at " + placetowork +".";
    };

    var skillstwosentences = [
      "This year, I participated in a successful software release on a shoestring budget. With fewer than six developers, we were able to deliver a polished final product on time and within the predetermined budget of $30,000. Through daily meetings, detailed project timelines, and the removal of project roadblocks, I also assisted in the release of product that received positive media and industry reviews.",
      createSkills2Sentence(),
      createSkills2Sentence2(),
      createSkills2Sentence3(),
      createSkills2Sentence4(),
      "Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are: Highly skilled in designing, testing, and developing software, thorough understanding of data structures and algorithms, knowledgeable of development best practices, proven track record of proper documentation for future maintenance and upgrades.",
      "I truly believe in continued education and research, and continue to seek new methods to assist with product development. I hope to bring my knowledge, and future knowledge, to your organization.",
      "I am a fast and accurate writer, with a keen eye for detail. I am able to take on the responsibility of this position immediately, and have the enthusiasm and determination to ensure that I make a success of it."

    ];

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
    };

    var introduction = getRandomSentence(introductionsentences);
    var skillsonesentence = getRandomSentence(skillsonesentences);
    var skillstwosentence = getRandomSentence(skillstwosentences);
    var nextstepsentence = getRandomSentence(nextstepsentences);
    var thankyousentence = getRandomSentence(thankyousentences);


      $(".coverlettertext").append('<p id="greetings">Dear sir or madam</p>');
      $(".coverlettertext").append('<p id="position">Re: ' + profession + ' position</p>');
      $(".coverlettertext").append('<p id="introduction">' + introduction + '</p>');
      $(".coverlettertext").append('<p id="skills1">' + skillsonesentence + '</p>');
      $(".coverlettertext").append('<p id="skills2">' + skillstwosentence + '</p>');
      $(".coverlettertext").append('<p id="nextsteps">' + nextstepsentence + '</p>');
      $(".coverlettertext").append('<p id="thanks">' + thankyousentence + '</p>');

  });
});
