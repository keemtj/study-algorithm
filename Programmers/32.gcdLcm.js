/**
 * 최대공약수(gcd), 최소공배수(lcm)
 * 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * 최대공약수: 두 자연수의 공통된 약수 중 가장 큰 수
 * 최소공배수: 두 자연수의 공통된 배수 중 가장 작은 수
 * 유클리드 호제법
 */

// 풀이1
function gcd(max, min) {
  if (max % min === 0) return min;
  if (max % min !== 0) return gcd(min, max % min);
}

function lcm(max, min) {
  return (max * min) / gcd(max, min);
}

function solution(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  return [gcd(max, min), lcm(max, min)];
}

solution(12, 3); // [3, 12]
solution(2, 5); // [1, 10]
solution(5, 2); // [1, 10]
solution(3, 4); // [1, 12]

/**
 * 풀이
 * 1. 유클리드 호제법
 * - 최대공약수(a > b일때)
 * a % b가 0이 되면 a, b의 최대공약수는 b가 된다
 * a % b가 0이 아닐 경우 (b, a % b)를 반복하여 나머지가 0이 되는 순간 a % b가 최대공약수가 된다
 * - 최소공배수
 * 두 자연수 a, b의 곱에 a, b의 최대공약수로 나누어 나온 수가 a, b 두 수의 최소공배수가 된다
 * (a * b) / gcd(a, b)
 *
 * 2. 최대공약수를 계산할 때 재귀를 이용한다(반복문으로도 가능하다)
 * a % b가 0이 될 때까지 반복하여 최대공약수를 찾기 위함이다
 * 3. 최소공배수를 계산한다
 * 4. a, b의 교환법칙은 성립된다. 즉, a % b가 아닌 b % a로 해도 성립한다
 */

// 풀이2
function solution2(n, m) {
  const gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  const lcm = (n, m) => (n * m) / gcd(n, m);
  return [gcd(n, m), lcm(n, m)];
}

solution2(12, 3); // [3, 12]
solution2(2, 5); // [1, 10]
solution2(5, 2); // [1, 10]
solution2(3, 4); // [1, 12]
