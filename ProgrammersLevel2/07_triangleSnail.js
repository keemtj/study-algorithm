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
    triangle.push(Array.from({ length: i + 1 }));
  }

  const len = triangle.flatMap(v => v).length;

  let num = 1;
  let start = 0;
  let end = n - 1;
  let column = 0;
  let row = n - 1;

  while (true) {
    for (let i = start; i <= end; i++) {
      triangle[i][column] = num;
      num += 1;
    }
    if (num > len) break;
    start += 1;

    for (let i = start; i <= end; i++) {
      triangle[row][i] = num;
      num += 1;
    }
    if (num > len) break;
    end -= 1;
    row -= 1;

    for (let i = end; i >= start; i--) {
      triangle[i][i] = num;
      num += 1;
    }
    if (num > len) break;
    start += 1;
    column += 1;
    row -= 1;
  }
  return [];
}

solution(6); // [1,2,9,3,10,8,4,5,6,7]
