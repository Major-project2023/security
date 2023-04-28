const form = document.getElementById('sms-form');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const to = document.getElementById('to').value;
  const message = document.getElementById('message').value;

  fetch('/send-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: to,
      message: message
    })
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  })
  .then(function(data) {
    response.innerHTML = data;
  })
  .catch(function(error) {
    console.log('There was a problem with the fetch operation:', error.message);
    response.innerHTML = '<p id="error">There was a problem with the fetch operation. Please try again later.</p>';
  });
});
