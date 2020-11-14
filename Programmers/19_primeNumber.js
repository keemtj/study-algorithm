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
  // console.log(primes.filter(v => v).length);
}

solution(10); // 4 // [2, 3, 5, 7]

function solution2(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

solution2(10);
/**
 * ! 프로그래머스의 다양한 풀이방법을 보고 시도해보자*****
 * 에라토스테네스의 체
 * 주어진 값까지 루프를 돌면서 소수의 배수를 먼저 제거
 */

function isPrime(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function solution3(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr.push(isPrime(i));
  }
  return arr.filter(v => v).length;
}

solution3(10);
