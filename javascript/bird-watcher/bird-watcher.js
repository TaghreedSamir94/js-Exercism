// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  const len = birdsPerDay.length;
  let sum =0;
  for (let i = 0; i < len; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}
console.log('Debug message');
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startindx = (week-1)*7;
  const end = startindx + 7;
  let sum =0;
  for (let i = startindx; i < end; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let correct =[];
  const len = birdsPerDay.length;
  for (let i = 0; i < len; i+=2) {
    birdsPerDay[i]=birdsPerDay[i] + 1;
  }
  return  birdsPerDay;
}
