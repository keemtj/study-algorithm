/**
 * 하샤드 수
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다
 * 예를 들어 18의 자릿수 합은 1+8=9, 18은 자릿수 합 9로 나누어 떨어지므로 18은 하샤드 수
 */

function solution(x) {
  const num = [...`${x}`].map(v => parseInt(v, 12)).reduce((a, b) => a + b, 0);
  const harshad = x % num ? false : true;
  return harshad;
}

solution(13);

/**
 * 풀이
 * 1. Array.prototype.map()
 * 2. Array.prototype.reduce()
 */
