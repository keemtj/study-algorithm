/**
 * 소수 찾기
 * 1부터 n사이에 있는 소수의 개수를 반환하는 함수
 * 소수: 1과 자기 자신으로만 나누어 떨어지는 수
 * (1은 소수가 아니다)
 */

function solution(n) {
  const arr = [];
  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }
}

solution(10); // 4 // [2, 3, 5, 7]
