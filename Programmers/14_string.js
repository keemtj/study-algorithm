/**
 * ! 미해결
 * 문자열 내 마음대로 정렬하기
 * input: 문자열로 구성된 리스트 strings, 정수 n
 * 각 문자열의 index n번째 글자를 기준으로 오름차순 정렬
 * 인덱스 1의 문자가 같은 문자열이 여러개일 경우 사전순으로 정렬
 */

function solution(strings, n) {
  strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  );
  return strings;
}

solution(['sun', 'bed', 'car'], 1); // ["car", "bed", "sun"]

/**
 * 풀이
 * ! 1. String.prototype.sort()
 * ! 2. String.prototype.localeCompare(): 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지,
 * !                                      후에 오는지 혹은 같은 순서인지 알려주는 숫자를 리턴
 * !                                      (2 or 1 or some other positive value)
 * !                                      (-2 or -1 or some other negative value)
 * !                                      'c'.localeCompare('a'); // 2 or 1 or some other positive value
 * !                                      'a'.localeCompare('c'); // -2 or -1 or some other negative value
 */

// 문자열 오름차순으로 정렬(사전순)
function solution(strings, n) {
  strings.sort((a, b) => a - b);
}
// 문자열의 n번째 글자를 기준으로 오름차순 정렬
function solution(strings, n) {
  strings.sort((a, b) => a[n] - b[n]);
}

// 문자열의 n번째 글자가 같다면, 사전순으로 정렬
// localeCompare() 메소드
function solution(strings, n) {
  strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  );
  return strings;
}
