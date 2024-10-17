const SpeechRecognition = window.SpeechRecognition ||
window.webitSpeechRecognition;
const recognition = new SpeechRecognition();
const socket =io();

recognition.lang = 'en-US';
recognition.interimResults = false;

document.querySelector('button').addEventListener('click',()=>{
    recognition.start();

})
recognition.addEventListener('result',(e)=>{
    socket.emit('chat message', text);
    let last = e.results.length - 1;
    let text = e.results[last][0].trasnscript;
    console.log('Confidence :'+e.results[0][0].confidence);

})