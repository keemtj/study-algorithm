/**
 * square root(제곱근) 판별
 * n이 x의 제곱이라면 (x+1)의 제곱을 리턴
 * n이 x의 제곱이 아니라면 -1 리턴
 */

function solution(n) {
  const sqrt = Math.sqrt(n);
  const nextSqrt = sqrt + 1;
  console.log(sqrt === Math.floor(sqrt) ? nextSqrt ** 2 : -1);
  return sqrt === Math.floor(sqrt) ? nextSqrt ** 2 : -1;
}

solution(121); // 144
solution(2); // -1

/**
 * 풀이
 * Math.sqrt(): 인수의 제곱근
 * Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수
 */
