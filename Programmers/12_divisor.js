/**
 * 나누어 떨어지는 숫자 배열
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
 * 정수 i, j에 대해 i * j이면 arr[i]*arr[j]이다
 */

function solution(arr, divisor) {
  const answer = arr.filter(v => !(v % divisor)).sort((a, b) => a - b);
  if (!answer.length) return [-1];
  return answer;
}

solution([5, 9, 7, 10], 5); // [5, 10]
solution([3, 2, 6], 10); // [-1]

/**
 * 풀이
 * 1. Array.prototype.filter(): callback함수의 값이 true인 요소만 반환하여 새로운 배열 생성
 * 2. Array.prototype.sort(): 기본적으로 오름차순정렬을 한다. 단, 숫자 요소의 배열의 경우 유니코드 코드 포인트에 따라 정렬하므로 주의가 필요하다
 *                            sort((a, b) => a - b), sort((a, b) => b - a)
 */
