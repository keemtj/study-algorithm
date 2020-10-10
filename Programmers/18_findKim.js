/**
 * 서울에서 김서방 찾기
 * String형 배열 seoul의 elements중 'Kim'의 위치 x를 찾아,
 * '김서방은 x에 있다'는 String을 반환하는 함수를 리턴
 */

function solution(seoul) {
  const location = seoul.indexOf('Kim');
  return `김서방은 ${location}에 있다`;
}

solution(['Jane', 'Kim']);

function solution2(seoul) {
  const location = seoul.findIndex(s => s === 'Kim');
  return `김서방은 ${location}에 있다`;
}

solution2(['Jane', 'Kim']);

/**
 * 풀이
 * 1. Array.prototype.indexOf(): 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 만족하는 요소가 없으면 -1 반환
 * 2. Array.prototype.findIndex(): 콜백함수의 반환값이 true인 첫 번째 요소의 인덱스를 반환, 만족하는 요소가 없으면 -1 반환
 */
