/**
 * 행렬의 덧셈
 * 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
 * arr1, arr2를 입력 받아 행렬 덧셈의 결과를 반환
 */

function solution(arr1, arr2) {
  const answer = arr1.map((v1, i) => v1.map((v2, j) => v2 + arr2[i][j]));
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ],
); // [[4, 6], [7, 9]]

solution([[1], [2]], [[3], [4]]); // [[4], [6]]
