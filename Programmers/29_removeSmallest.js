/**
 * 제일 작은 수 제거하기
 * 정수를 저장한 arr에서 가장 작은 수를 제거한 배열을 리턴
 * 리턴하는 배열이 빈배열일 경우엔 -1을 채워 리턴
 */

function solution(arr) {
  const min = Math.min(...arr);
  const list = arr.filter(v => v !== min);
  return list.length ? list : [-1];
}

solution([1]);
solution([10, 1, 1, 2, 3]); // [10, 2, 3]

/**
 * 풀이
 * 주의사항: 가장 작은 숫자가 여러개일 경우 모두 제거해준다
 * 1. Math.min(): 주어진 숫자들 중 가장 작은 값을 반환
 * 2. Math.max(): 주어진 숫자들 중 가장 큰 값을 반환
 *                *주어진 값은 숫자형이어야 한다
 *                *숫자형으로 변환이 불가능한 경우 NaN을 반환한다
 *                *주어진 인자값이 없을 경우 Infinity를 반환한다
 * 3. Array.prototype.filter()
 */
