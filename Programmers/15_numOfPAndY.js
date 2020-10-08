/**
 * 문자열 내 p와 y의 개수
 * 대소문자 구분없이 p,y의 개수를 비교해 같으면 true, 다르면 false
 * 둘다 존재하지 않을 경우 true
 */

function solution(s) {
  const string = s.toLowerCase();
  const p = [...string].filter(str => str === 'p').length;
  const y = [...string].filter(str => str === 'y').length;
  console.log(p >= y);
  return p >= y;
}

solution('pPoooyY');
