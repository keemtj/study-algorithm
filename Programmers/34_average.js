/**
 * 평균 구하기
 * 정수를 담고 있는 배열의 각 요소들에 대하여 평균값을 리턴
 */

function solution(arr) {
  const answer = arr.reduce((a, b) => a + b, 0) / arr.length;
  return answer;
}

solution([5, 5]);

/**
 * 풀이
 * 1. Array.prototype.reduce()를 이용하여 각 요소의 합을 계산
 * 2. 평균 = 합 / 개수
 */
