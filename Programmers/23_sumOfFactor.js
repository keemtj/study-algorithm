/**
 * 약수의 합
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴
 */

function solution(n) {
  const factor = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && factor.push(i);
  }
  const sum = factor.reduce((a, b) => a + b, 0);
  return sum;
}

solution(12); // 28
solution(5); // 6

/**
 * 풀이
 * 1. 1부터 n까지의 자연수를 순회하면서 n 나누기 i의 나머지가 0이 되는 i를 구함
 * 2. Array.prototype.reduce()를 통해 배열의 각 요소의 총 합을 계산
 */
