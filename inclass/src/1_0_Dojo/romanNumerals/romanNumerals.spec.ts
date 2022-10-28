import { romanNumbers } from './romanNumerals'

const generateRomanRelationship = (input: number, output: string) => ({ input, output })

describe('Testing roman numerals conversion', () => {
  it('should return empty string if 0', () => {
    expect(romanNumbers(0)).toBe('')
  })

  it.each([
    generateRomanRelationship(1, 'I'),
    generateRomanRelationship(5, 'V'),
    generateRomanRelationship(10, 'X'),
    generateRomanRelationship(50, 'L'),
    generateRomanRelationship(100, 'C'),
    generateRomanRelationship(500, 'D'),
    generateRomanRelationship(1000, 'M'),
  ])('If the user enters $input, we expect the output to be $output', ({ input, output }) => {
    expect(romanNumbers(input)).toBe(output)
  })

  it.each([
    generateRomanRelationship(2, 'II'),    
    generateRomanRelationship(30, 'XXX'),
    generateRomanRelationship(200, 'CC'),
    generateRomanRelationship(2000, 'MM'),
    generateRomanRelationship(3000, 'MMM'),
  ])('Convert arabic numbers to roman numbers with multiple instances of one numeral. $input should return $output', ({ input, output }) => {
    expect(romanNumbers(input)).toBe(output)
  })
  
})
