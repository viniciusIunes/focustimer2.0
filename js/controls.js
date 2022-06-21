import { 
  minutes,
  buttonForestTwo,
  buttonRainTwo,
  buttonCoffeShopTwo,
  buttonFireplaceTwo
 } from './elements.js'

export default function ({ buttonPause, buttonPlay }) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

function stop() {

    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()

  }    
  return {
    play,
    pause,
    stop,
  }
}
