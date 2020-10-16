/**
 * 짝수와 홀수
 * 정수 num이 짝수일 경우 'Even', 홀수일 경우 'Odd'를 반환
 * 0은 짝수
 */

function solution(num) {
  console.log(num % 2 ? `${num} = 홀수(Odd)` : `${num} = 짝수(Even)`);
  return num % 2 ? 'Odd' : 'Even';
}
solution(0); // Even
solution(3); // Odd
solution(4); // Even

/**
 * 풀이
 * 삼항연산자
 */
