// store references for all audio elements and div elements inside class "keys"
const instrumentDivs = Array.from(document.querySelectorAll('.key'))
const instrumentAudios = Array.from(document.querySelectorAll('audio'))

// add an event listener to check when a key is pressed
document.addEventListener('keypress', (event) => {
    // find the audio element reference based on key pressed
    const audioReference = getAudioElementBasedOnPressedKey(event.keyCode)
    if (!audioReference)
        alert('wrong key pressed')
    else {
        const divReference = getAudioDivBasedOnPressedKey(event.keyCode)
        divReference.classList.add('keypress')
        audioReference.load()
        audioReference.play()
        audioReference.onended = () => {
            divReference.classList.remove('keypress')
        }      
    }
})

const getAudioElementBasedOnPressedKey = (keyCode) => {
    return instrumentAudios.find(element => element.getAttribute('data-key') == keyCode)
}

const getAudioDivBasedOnPressedKey = (keyCode) => {
    return instrumentDivs.find(element => element.getAttribute('data-key') == keyCode)
}