const ROMAN_TO_ARABIC_UNITS = [
  {roman: 'I', arabic: 1},
  {roman: 'IV', arabic: 4},
  {roman: 'V', arabic: 5},
  {roman: 'IX', arabic: 9},
  {roman: 'X', arabic: 10},
  {roman: 'XL', arabic: 40},
  {roman: 'L', arabic: 50},
  {roman: 'XC', arabic: 90},
  {roman: 'C', arabic: 100},
  {roman: 'CD', arabic: 400},
  {roman: 'D', arabic: 500},
  {roman: 'CM', arabic: 900},
  {roman: 'M', arabic: 1000},
].reverse()

const getDividend = (value) => {
  const { arabic, roman } = ROMAN_TO_ARABIC_UNITS.find(({ arabic }) => {    
    return value / arabic >= 1
  })
  return { residue: value / arabic, roman, arabic }
}

const calculateRomans = (value, carry) => {
  if(value === 0)
    return carry  
  if(value >= 1){
    const { residue, roman, arabic } = getDividend(value)
    const repeatedAmount = Math.floor(residue)
    // Leftover amount after romans have been applied to array
    const leftOverValue  = value - (arabic * repeatedAmount)
    return calculateRomans(leftOverValue, [...carry, ...Array.from({ length: repeatedAmount }).map(() => roman)])
  }
}

export const romanNumbers = (num: number) => {
  if (num === 0) {
    return '';
  }
  
  const roman = calculateRomans(num, []).join('')

  return roman;
}
