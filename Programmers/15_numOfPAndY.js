/**
 * ! 해결
 * 문자열 내 p와 y의 개수
 * 대소문자 구분없이 p,y의 개수를 비교해 같으면 true, 다르면 false
 * 둘다 존재하지 않을 경우 true
 */

function solution(s) {
  const string = s.toLowerCase();
  const p = [...string].filter(str => str === 'p').length;
  const y = [...string].filter(str => str === 'y').length;
  // return p === y ? true : false;
  return p === y;
}

solution('pPoooyY');

/**
 * 풀이
 * 1. String.prototype.toLowerCase(): 호출된 문자열을 소문자로 변환하여 반환
 * 2. 스프레드 연산자
 * 3. Array.prototype.filter()
 * 4. 비교 연산자는 boolean값을 리턴한다
 */
