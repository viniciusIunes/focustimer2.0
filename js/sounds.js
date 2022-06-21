import {
  buttonForest,
  buttonForestTwo,
  buttonRain,
  buttonRainTwo,
  buttonCoffeShop,
  buttonCoffeShopTwo,
  buttonFireplace,
  buttonFireplaceTwo
} from './elements.js'

export default function ({ soundsControls }) {
  buttonForest.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonFlorestAdd()
    soundsControls.pressButtonSoundForest()

    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()
  })

  buttonForestTwo.addEventListener('click', function () {
    soundsControls.pressButtonFlorestRemove()
  })

  buttonRain.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressButtonRainAdd()
    soundsControls.pressButtonSoundRain()

    buttonForestTwo.click()
    buttonCoffeShopTwo.click()
    buttonFireplaceTwo.click()
  })

  buttonRainTwo.addEventListener('click', function () {
    soundsControls.pressButtonRainRemove()
  })

  buttonCoffeShop.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressCoffeShopAdd()
    soundsControls.pressButtonSoundCoffeShop()

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonFireplaceTwo.click()
  })

  buttonCoffeShopTwo.addEventListener('click', function () {
    soundsControls.pressCoffeShopRemove()
  })

  buttonFireplace.addEventListener('click', function () {
    soundsControls.buttonPressAudio()
    soundsControls.pressFireplaceShopAdd()
    soundsControls.pressButtonSoundFireplace()

    buttonForestTwo.click()
    buttonRainTwo.click()
    buttonCoffeShopTwo.click()
  })
  
  buttonFireplaceTwo.addEventListener('click', function () {
    soundsControls.pressFireplaceRemove()
  })
}
