import { minutes, incrementTimer, buttonStop } from './elements.js'

export default function Timer({
  controls,
  soundsControls,
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeout

  function updateDisplay(minutes, seconds, incrementTimer) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    minutesDisplay.textContent = String(incrementTimer).padStart(2, '0')
  }

  function hold() {
    clearTimeout(timerTimeout)
  }

  function resetTimer() {
    updateDisplay(minutes, 0, incrementTimer)
    hold()
  }

  function coutdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        soundsControls.timeEnd()
        buttonStop.click()
        controls.stop()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, Number(--seconds), minutes)
      coutdown()
    }, 1000)
  }

  return {
    updateDisplay,
    resetTimer,
    coutdown,
    hold
  }
}
