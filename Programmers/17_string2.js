/**
 * 문자열 다루기 기본
 * s의 길이가 4 혹은 6, 숫자로만 구성되어 있으면 true를 리턴
 */

function solution(s) {
  const len = s.length;
  const answer =
    len === 4 || len === 6 ? [...s].every(str => +str === 0 || +str) : false;
  return answer;
}

solution('1022');
solution('120056');
solution('qwer');
solution('qwerty');

/**
 * 풀이
 * 1. 삼항연산자: lnegth 조건에 맞게 값을 분리
 * 2. Array.prototype.every(): 콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false를 리턴
 *                             단, every 메서드를 호출한 배열이 빈 배열일 경우 언제나 true
 * 3. Array.prototype.some(): 콜백 함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false를 리턴
 *                            단, some 메서드를 호출한 배열이 빈 배열일 경우 언제나 false
 * 4. +'0'은 숫자 0으로 타입 변환되지만, boolean값으로 평가될때 false이므로 주의해야한다
 */
