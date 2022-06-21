export default function ({
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
}) {
  function pressButtonFlorestAdd() {
    buttonForest.classList.add('hide')
    buttonForestTwo.classList.remove('hide')
  }

  function pressButtonFlorestRemove() {
    buttonForestTwo.classList.add('hide')
    buttonForest.classList.remove('hide')
    buttonForestAudio.pause()
  }

  function pressButtonRainAdd() {
    buttonRain.classList.add('hide')
    buttonRainTwo.classList.remove('hide')
  }

  function pressButtonRainRemove() {
    buttonRainTwo.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonRainAudio.pause()
  }

  function pressCoffeShopAdd() {
    buttonCoffeShop.classList.add('hide')
    buttonCoffeShopTwo.classList.remove('hide')
  }

  function pressCoffeShopRemove() {
    buttonCoffeShopTwo.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShopAudio.pause()
  }

  function pressFireplaceShopAdd() {
    buttonFireplace.classList.add('hide')
    buttonFireplaceTwo.classList.remove('hide')
  }

  function pressFireplaceRemove() {
    buttonFireplaceTwo.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplaceAudio.pause()
  }

  function pressButtonSoundForest() {
    buttonForestAudio = new Audio(' ./sounds/Floresta.wav')
    buttonForestAudio.play()
    buttonForestAudio.loop = true
  }

  function pressButtonSoundRain() {
    buttonRainAudio = new Audio(' ./sounds/Chuva.wav')
    buttonRainAudio.play()
    buttonRainAudio.loop = true
  }

  function pressButtonSoundCoffeShop() {
    buttonCoffeShopAudio = new Audio(' ./sounds/Cafeteria.wav')
    buttonCoffeShopAudio.play()
    buttonCoffeShopAudio.loop = true
  }

  function pressButtonSoundFireplace() {
    buttonFireplaceAudio = new Audio(' ./sounds/Lareira.wav')
    buttonFireplaceAudio.play()
    buttonFireplaceAudio.loop = true
  }

  function timeEnd() {
    let timeEnd = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
    timeEnd.play()
  }

  function buttonPressAudio() {
    let buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
    buttonPressAudio.play()
  }

  return {
    buttonPressAudio,
    timeEnd,
    pressButtonSoundFireplace,
    pressButtonSoundCoffeShop,
    pressButtonSoundRain,
    pressButtonSoundForest,
    pressFireplaceRemove,
    pressFireplaceShopAdd,
    pressCoffeShopRemove,
    pressCoffeShopAdd,
    pressButtonRainRemove,
    pressButtonRainAdd,
    pressButtonFlorestRemove,
    pressButtonFlorestAdd
  }
}
