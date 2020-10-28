/**
 * 3진법 뒤집기
 * 자연수 n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 리턴
 */

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

solution(45); // 7

/**
 * 풀이
 * 1. Number.prototype.toStirng(): numObj.toString([radix]); 2~36사이의 진수를 나타내는 문자열을 반환
 * 2. Array.prototype.reverse(): arr.reverse(); 배열의 순서를 반전한다
 * 3. Array.prototype.join(): arr.join([separator]); 배열의 모든 요소들을 separator로 구분하여 연결한 하나의 문자열을 반환
 * 4. parseInt(): 내장객체; parseInt(string, radix); string인자를 구문분석(string이 문자열이 아니면 문자열로 변환)하여 특정 진수의 정수를 반환
 */
