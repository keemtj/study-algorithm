/**
 * 수박수박수박수박수
 * 길이 n, '수박수박수박수...'패턴을 유지하는 문자열을 리턴
 * n = 4 -> '수박수박'
 * n = 3 -> '수박수'
 */

function solution(n) {
  let string = '';
  for (let i = 1; i <= n; i++) {
    string += i % 2 ? '수' : '박';
    // i % 2 ? (string += '수') : (string += '박');
  }
  return string;
}

solution(3); // '수박수'
solution(4); // '수박수박'

/**
 * 풀이
 * 1. 삼항연산자: 조건식 ? truthy : falsy
 */
