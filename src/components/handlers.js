let synth = speechSynthesis;
let flag = false;

export function onClickPlay() {
  if (!flag) {
    flag = true;
    const utterance = new SpeechSynthesisUtterance(
      document.querySelector("#article").textContent
    );
    utterance.voice = synth.getVoices()[0];
    utterance.onend = function() {
      flag = false;
    };
    synth.speak(utterance);
  }
  if (synth.paused) {
    /* unpause/resume narration */
    synth.resume();
  }
}
export function onClickPause() {
  if (synth.speaking && !synth.paused) {
    synth.pause();
  }
}
export function onClickStop() {
  if (synth.speaking) {
    flag = false;
    synth.cancel();
  }
}
