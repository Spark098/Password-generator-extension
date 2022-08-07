const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase') 
const includeLowercaseElement = document.getElementById('includeLowercase') 
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
console.log(UPPERCASE_CODES)

characterAmountNumber.addEventListener('input', inputCharacterAmount)
characterAmountRange.addEventListener('input', inputCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  let charCodes=[];
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES)
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function inputCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}