/**
 * ! 미해결 TT
 * 소수 찾기
 * 1부터 n사이에 있는 소수의 개수를 반환하는 함수
 * 소수: 1과 자기 자신으로만 나누어 떨어지는 수
 * (1은 소수가 아니다)
 */

function solution(n) {
  const primes = new Array(n).fill(true);
  primes[0] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        primes[j - 1] = false;
      }
    }
  }
  console.log(primes.filter(v => v).length);
}

solution(10); // 4 // [2, 3, 5, 7]

/**
 * ! 프로그래머스의 다양한 풀이방법을 보고 시도해보자*****
 * 에라토스테네스의 체
 * 주어진 값까지 루프를 돌면서 소수의 배수를 먼저 제거
 */
