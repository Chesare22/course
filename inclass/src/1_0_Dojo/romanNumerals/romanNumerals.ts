const ROMAN_TO_ARABIC_UNITS = [
  {roman: 'I', arabic: 1},
  {roman: 'V', arabic: 5},
  {roman: 'X', arabic: 10},
  {roman: 'L', arabic: 50},
  {roman: 'C', arabic: 100},
  {roman: 'D', arabic: 500},
  {roman: 'M', arabic: 1000},
]

export const romanNumbers = (num: number) => {
  if (num === 0) {
    return '';
  }
  
  const { roman } = ROMAN_TO_ARABIC_UNITS.find(({ arabic }) => arabic === num);

  return roman;
}
