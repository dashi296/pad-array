import { padStart, padEnd } from '../src';

describe('index', () => {
  const originalArray = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Charmander' },
    { id: 5, name: 'Charmeleon' },
    { id: 6, name: 'Charizard' },
  ];

  const pikachu = {
    id: 25,
    name: 'Pikachu',
  };

  describe('padStart', () => {
    it('should return original array if original array is longer than specified length.', () => {
      const result = padStart(originalArray, originalArray.length - 1, pikachu);
      expect(result).toEqual(originalArray);
    });

    it('should return original array if original array is the same length as the specified length.', () => {
      const result = padStart(originalArray, originalArray.length, pikachu);
      expect(result).toEqual(originalArray);
    });

    it('should return original array if specified length is longer than original array length.', () => {
      const result = padStart(originalArray, originalArray.length + 3, pikachu);
      expect(result).toEqual([pikachu, pikachu, pikachu, ...originalArray]);
    });
  });

  describe('padEnd', () => {
    it('should return original array if original array is longer than specified length.', () => {
      const result = padEnd(originalArray, originalArray.length - 1, pikachu);
      expect(result).toEqual(originalArray);
    });

    it('should return original array if original array is the same length as the specified length.', () => {
      const result = padEnd(originalArray, originalArray.length, pikachu);
      expect(result).toEqual(originalArray);
    });

    it('should return original array if specified length is longer than original array length.', () => {
      const result = padEnd(originalArray, originalArray.length + 3, pikachu);
      expect(result).toEqual([...originalArray, pikachu, pikachu, pikachu]);
    });
  });
});
