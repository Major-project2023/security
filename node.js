// Load Twilio module
const twilio = require('twilio');

// Initialize Twilio client
const accountSid = 'ACf6482f23609a508706f858a505d729b3';
const authToken = 'faa03becc2e39e38067955f7600686e9';
const client = new twilio(accountSid, authToken);

// Send SMS message
client.messages
  .create({
    body: 'Helo',
    from: '+16205091263',
    to: '919916332373'
  })
  .then(message => console.log(`Message sent: ${message.sid}`))
  .catch(error => console.error(error));
