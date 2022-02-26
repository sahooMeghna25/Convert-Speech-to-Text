var speechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox=$("#textbox");
var instruction= $("#instruction");
var content = " ";

recognition.continuous = true;

recognition.onstart = function(){
    instruction.text("Voice Recognition  is On");
}

recognition.onspeechend = function(){
    instruction.text("No Activity");
}

recognition.onerror = function(){
    instruction.text("!Try Again");
}

recognition.onresult = function(event){
    var current = event.resultIndex;
    var transscript = event.results[current][0].transscript;
    content += transscript
    textbox.val(content)
}

$("#start-btn").click(function(event) {

    if(content.length){
        content += ' '
    }
    recognition.start()


});

textbox.on('input', function(){
    content = $(this).val()
})