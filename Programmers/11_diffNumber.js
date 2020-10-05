/**
 * 같은 숫자는 싫어
 * 배열 arr의 각 원소는 0 ~ 9까지로 이루어져 있음
 * 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
 * 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지
 * ! 연속된 숫자의 중복 제거
 */

function solution(arr) {
  const len = arr.length;
  const answer = [];
  for (let i = 0; i < len; i++) {
    arr[i] !== arr[i + 1] && answer.push(arr[i]);
  }
  console.log('solution ', answer);
  return answer;
}

function solution2(arr) {
  const answer = arr.filter((v, i, array) => v !== array[i + 1]);
  console.log('solution2', answer);
  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
solution2([1, 1, 3, 3, 0, 1, 1]);

/**
 * 풀이
 * 1. Array.prototype.push(): 원본 배열의 마지막에 인수로 전달 받은 값을 추가한다.
 * 2. Array.prototype.filter(): callback함수의 값이 true인 요소만 반환하여 만든 새로운 배열을 리턴한다.
 */
