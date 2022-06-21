import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import ControlSound from './soundsControls.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  secondsDisplay,
  minutesDisplay,
  buttonForest,
  buttonForestTwo,
  buttonRain,
  buttonRainTwo,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonFireplace,
  buttonFireplaceTwo,
  buttonForestAudio,
  buttonRainAudio,
  buttonCoffeShopAudio,
  buttonFireplaceAudio,
  incrementTimer
} from './elements.js'


const controls = Controls({
  buttonPause,
  buttonPlay
})

const soundsControls = ControlSound({
  buttonForest,
  buttonForestTwo,
  buttonForestAudio,
  buttonRain,
  buttonRainTwo,
  buttonRainAudio,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonCoffeShopAudio,
  buttonFireplace,
  buttonFireplaceTwo,
  buttonFireplaceAudio
})

const timer = Timer({
  controls,
  soundsControls,
  minutesDisplay,
  secondsDisplay
}) 

Sound({
  soundsControls 
})

Events({
  controls,
  timer,
  soundsControls,
  incrementTimer
})







