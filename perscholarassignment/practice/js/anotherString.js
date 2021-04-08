let message = 'life is love a rollercoaster sometime it goes up and dowmnm and i\'m looking forward to the dau i graduate from Per Scholar.'

let sentence = message

 .replace('dowmnm','down')
 .replace(/love/gi, 'like')
 .replace(/dau/gi, 'day')

console.log(sentence)
console.log(sentence.includes('rollercoaster'))
console.log(sentence.endsWith('graduate'))
console.log(sentence.startsWith('life'))




