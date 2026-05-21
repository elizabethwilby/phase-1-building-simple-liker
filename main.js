// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message');
modal.classList.add('hidden')
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(function(heart){
  heart.addEventListener('click', function(){
    if (heart.textContent === FULL_HEART) {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart')
    } else { 
      mimicServerCall()
      .then(function() {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart')
      })
      .catch(function(errorText) {
        modalMessage.textContent = errorText;
        modal.classList.remove('hidden')
        setTimeout(function() {
          modal.classList.add('hidden');
        }, 3000)
        })
    
    }
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
