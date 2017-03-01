export default function isPalidrome (str){
  const regularExpression = /[^A-Za-z0-9]/g
  const lowRegStr = str.toLowerCase().replace(regularExpression, '')
  const reverseStr = lowRegStr.split('').reverse().join('')
  return reverseStr === lowRegStr
}
