
let sendMessage = document.getElementById('sendMessage');
sendMessage.addEventListener('click', () =>{
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  window.open(`mailto:moisescastro1234567890@gmail.com?subject=${subject}&body=${message}`);
});