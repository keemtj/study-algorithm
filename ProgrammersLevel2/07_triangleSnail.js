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

function solution2(n) {
  let triangle = [];
  for (let i = 0; i < n; i++) {
    triangle.push(Array.from({ length: i + 1 }));
  }

  let row = -1;
  let col = 0;
  let num = 1;
  for (let i = n; i > 0; i -= 3) {
    console.log(i);
    triangle[++row][col] = num++;
    console.log(triangle);

    for (let j = 0; j < i - 1; j++) {
      triangle[++row][col] = num++;
    }
    console.log(triangle);
    for (let j = 0; j < i - 1; j++) {
      triangle[row][++col] = num++;
    }
    console.log(triangle);
    for (let j = 0; j < i - 2; j++) {
      triangle[--row][--col] = num++;
    }
    console.log(triangle);
  }
  console.log(triangle);
  return triangle.flat();
}
solution2(5); // [1,2,9,3,10,8,4,5,6,7]

/**
 * 풀이
 * 1. 정삼각형을 왼쪽으로 밀어 직각삼각형의 형태로 생각
 * 2. 세로줄, 가로줄, 대각선줄에 순차적으로 num값을 넣는다
 * 3. 시작열과 끝열이 같아지고, 시작행과 끝행이 같아지는 순간에 반복문을 끝낸다
 * 2차원 배열
 * 세로줄 = 열 = row => [1, 2, 3] / [4, 5, 6] / [7, 8, 9]
 * 가로줄 = 행 = column => row1 => 1, 2, 3 / row2 => 4, 5, 6 / row3 => 7, 8, 9
 * => arr[row][column]
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9],
 * ]
 *
 * 참고
 * sprial matrix
 */
