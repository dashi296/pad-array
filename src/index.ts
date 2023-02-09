export const padStart = <T extends unknown>(
  originalArray: T[],
  length: number,
  padValue: T
): T[] => {
  const padLength = length - originalArray.length;
  if (padLength <= 0) {
    return originalArray;
  }
  const padArray = [...Array(padLength)].map(() => padValue);
  return [...padArray, ...originalArray];
};

export const padEnd = <T extends unknown>(
  originalArray: T[],
  length: number,
  padValue: T
): T[] => {
  const padLength = length - originalArray.length;
  if (padLength <= 0) {
    return originalArray;
  }
  const padArray = [...Array(padLength)].map(() => padValue);
  return [...originalArray, ...padArray];
};
