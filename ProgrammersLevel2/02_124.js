/**
 * 124 나라의 숫자
 * 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현
 *
 * 1. 124나라에는 자연수만 존재
 * 2. 124나라에는 모든 수를 포현할 때 1, 2, 4만 사용
 */

function solution(n) {
  console.log(n, n % 3);
  let answer = '';
  let temp = n;
  while (temp > 0) {
    if (temp % 3 === 1) {
      answer = '1' + answer;
      temp = Math.floor(temp / 3);
    } else if (temp % 3 === 2) {
      answer = '2' + answer;
      temp = Math.floor(temp / 3);
    } else {
      // temp % 3 === 0
      answer = '4' + answer;
      temp = temp / 3 - 1;
    }
  }
  console.log(answer);
  return answer;
}

solution(4);

/**
 * 풀이
 * 규칙성찾기
 */
