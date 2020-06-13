export class Talker {
  constructor () {
    this.synth = window.speechSynthesis;
  }

  speak(text) {  
    let utterThis;
    if (this.synth.speaking) {
          console.error('speechSynthesis.speaking');
          return;
      }
      if (text !== '') {
        const voices = this.synth.getVoices();
        utterThis = new SpeechSynthesisUtterance(text) 
        try {
          utterThis.pitch = 1.0;
          utterThis.rate = .9;
          utterThis.voice = voices[18]}
        catch {
          utterThis.pitch = 1.7;
          utterThis.rate = .7;
          utterThis.voice = voices[0]}
        //leaves voice as default
      }
      
      utterThis.onend = function (event) {
          console.log('SpeechSynthesisUtterance.onend');
      } 
      utterThis.onerror = function (event) {
          console.error('SpeechSynthesisUtterance.onerror');
          console.log(utterThis)
      }
  
      this.synth.speak(utterThis);
      console.log(utterThis)
    }

    wait(ms) {
      let start = new Date().getTime();
      let end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
   }

}


