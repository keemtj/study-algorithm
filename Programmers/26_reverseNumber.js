/**
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열을 리턴
 */
function solution(n) {
  const answer = [...n.toString()].reverse().map(v => +v);
  return answer;
}

solution(12045); // [5,4,0,2,1]

/**
 * 풀이
 * 1. String.prototype.toString(): 10진수 문자열로 변환, 인수를 넣어줄 경우 n진수 문자열로 변환
 * 2. Array.prototype.reverse()
 * 3. Array.prototype.map()
 */
