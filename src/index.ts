export const padStart = <T extends unknown, K extends unknown>(
  originalArray: T[],
  length: number,
  padValue: K
): (T | K)[] => {
  const padLength = length - originalArray.length;
  if (padLength <= 0) {
    return originalArray;
  }
  const padArray = [...Array(padLength)].map(() => padValue);
  return [...padArray, ...originalArray];
};

export const padEnd = <T extends unknown, K extends unknown>(
  originalArray: T[],
  length: number,
  padValue: K
): (T | K)[] => {
  const padLength = length - originalArray.length;
  if (padLength <= 0) {
    return originalArray;
  }
  const padArray = [...Array(padLength)].map(() => padValue);
  return [...originalArray, ...padArray];
};
