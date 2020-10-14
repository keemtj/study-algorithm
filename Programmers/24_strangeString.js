/**
 * ! 해결
 * 이상한 문자 만들기
 * 문자열 s는 한 개 이상의 단어로 구성
 * 각 단어는 하나 이상의 공백문자로 구분되어 있음
 * 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
 * 공백을 기준으로 단어별로 짝/홀수 인덱스를 판딴
 * 첫 번째 글자는 index = 0이므로 짝수로 처리
 */

function solution(s) {
  const words = s.split(' ');
  const answer = words
    .map(word =>
      [...word]
        .map((w, i) => (i % 2 ? w.toLowerCase() : w.toUpperCase()))
        .join(''),
    )
    .join(' ');
  return answer;
}

solution('try hell world'); // "TrY HeLlO WoRlD"

/**
 * 풀이
 * 1. String.prototype.split(): 지정한 구분자를 이용하여 여러개의 문자열로 나누어 배열에 담아 리턴한다
 * 2. Array.prototype.map()
 * 3. String.prototype.toLowerCase()
 * 4. String.prototype.toUpperCase()
 * 5. Array.prototype.join(): 배열의 각 요소를 구분할 문자열을 지정하여 배열의 모든 요소를 연결해 하나의 문자열로 리턴한다
 */
