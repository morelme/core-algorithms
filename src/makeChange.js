export default function makeChange({price, amountGiven}) {
  const quarterValue = 25
  const dimeValue = 10
  const nickelValue = 5
  const pennieValue = 1

  let changeHash = {}
  changeHash['quarters'] = 0
  changeHash['dimes'] = 0
  changeHash['nickels'] = 0
  changeHash['pennies'] = 0

  if(price === amountGiven){
    return changeHash
  }

  let changeNeeded = amountGiven - price

  while(changeNeeded !== 0){
    let quarterCount = Math.floor(changeNeeded / quarterValue)
    if( quarterCount !== 0){
      changeNeeded = changeNeeded - (quarterValue * quarterCount)
      changeHash['quarters'] += quarterCount
    }

    let dimeCount = Math.floor(changeNeeded / dimeValue)
    if( dimeCount !== 0){
      changeNeeded = changeNeeded - (dimeValue * dimeCount)
      changeHash['dimes'] += dimeCount
    }

    let nickelCount = Math.floor(changeNeeded / nickelValue)
    if( nickelCount !== 0){
      changeNeeded = changeNeeded - (nickelValue * nickelCount)
      changeHash['nickels'] += nickelCount
    }

    let pennieCount = Math.floor(changeNeeded / pennieValue)
    if( pennieCount !== 0){
      changeNeeded = changeNeeded - (pennieValue * pennieCount)
      changeHash['pennies'] += pennieCount
    }
  }

  return changeHash

}
