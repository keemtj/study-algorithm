/**
 * 자릿수 더하기
 * 자연수 n = 123이면 1 + 2 + 3 = 6을 리턴
 */

function solution(n) {
  const sum = [...n.toString()].map(num => +num).reduce((a, b) => a + b, 0);
  return sum;
}

solution(103); // 4

/**
 * 풀이
 * 1. String.prototype.toString(): 10진수 문자열로 변환, 인수를 넣어줄 경우 n진수 문자열로 변환
 * 2. Array.prototype.map()
 * 3. Array.prototype.reduce()
 */
