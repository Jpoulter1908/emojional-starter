var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');
var messageOutput = document.querySelector('.message');


happyButton.addEventListener('click', outputHappy);
function outputHappy() {
  var happyMsg = new Array(
    "You go!",
    "Your smile just cheered me up!",
    "YAY!"
  );
  var random = happyMsg[Math.floor(Math.random() * happyMsg.length)];
  messageOutput.innerHTML = random;
}

sillyButton.addEventListener('click', outputSilly);
function outputSilly() {
  var sillyMsg = new Array(
    "Interesting response",
    "Sounds... good?",
    "Me too."
  );
  var random = sillyMsg[Math.floor(Math.random() * sillyMsg.length)];
  messageOutput.innerHTML = random;
}

cryingButton.addEventListener('click', outputCrying);
function outputCrying() {
  var cryingMessage = new Array(
    "Do you want to talk?",
    "Keep your head up",
    "We can cry together!"
  );
  var random = cryingMessage[Math.floor(Math.random() * cryingMessage.length)];
  messageOutput.innerHTML = random;
}
