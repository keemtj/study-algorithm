/**
 * 삼각 달팽이
 * 월간 코드 챌린지 시즌1
 * 정수 n이 매개변수로 주어집니다.
 * 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
 * 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  let triangle = [];
  for (let i = 0; i < n; i++) {
    triangle.push(Array.from({ length: i + 1 }, v => (v = '0')));
  }
  const len = triangle.flatMap(v => v).length;
  console.log(len);
  let num = 1;
  // 세로줄
  let startRow = 0;
  let endRow = n - 1;

  // 가로줄
  let startColumn = 0;
  let endColumn = n - 1;

  let round = 0;

  while (startColumn <= endColumn && startRow <= endRow) {
    // 세로줄
    for (let i = startRow; i <= endRow; i++) {
      triangle[i][startColumn] = num;
      num += 1;
    }
    startRow += 1;
    startColumn += 1;
    // 가로줄
    for (let i = startColumn; i <= endColumn; i++) {
      triangle[endRow][i] = num;
      num += 1;
    }
    endColumn -= 1;
    endRow -= 1;
    // 대각선줄
    for (let i = endRow; i >= startRow; i--) {
      triangle[i][triangle[i].length - 1 - round] = num;
      num += 1;
    }
    endColumn -= 1;
    startRow += 1;
    round += 1;
  }
  const answer = triangle.flat();
  return answer;
}

solution(6); // [1,2,9,3,10,8,4,5,6,7]

/**
 * 풀이
 * 1. 정삼각형을 직각삼각형의 형태로 생각
 * 2. 세로줄, 가로줄, 대각선줄에 순차적으로 num값을 넣는다
 * 세로줄: 세로줄을 다 채울 경우 다음 세로줄은 column과 row가 1씩 증가(++)
 * 가로줄: 가로줄을 다 채울 경우 다음 가로줄은 row(--), column
 */
