 import {
   buttonPlay,
   buttonPause,
   buttonStop,
   buttonMost,
   buttonLess,
   minutes
 } from './elements.js'

 export default function({
  controls,
  timer,
  soundsControls,
  incrementTimer
}) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.coutdown()
    soundsControls.buttonPressAudio()
  })
  
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    soundsControls.buttonPressAudio()
  })
  
  buttonStop.addEventListener('click', function () {
    timer.resetTimer()
    controls.stop()
    timer.updateDisplay(minutes, 0 ,incrementTimer)
    soundsControls.buttonPressAudio()
  })

  
  buttonMost.addEventListener('click', function () {
    incrementTimer = incrementTimer + 5
    timer.updateDisplay(minutes, 0, incrementTimer)
    soundsControls.buttonPressAudio()
  })
  
  buttonLess.addEventListener('click', function () {
    if (incrementTimer > 0) {
      incrementTimer = incrementTimer - 5
      timer.updateDisplay(minutes, 0, incrementTimer)
      soundsControls.buttonPressAudio()
    }
  })
}



