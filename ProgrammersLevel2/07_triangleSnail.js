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

  let num = 1;
  // start와 end로 숫자가 채워지는 길이를 결정(index)
  let start = 0;
  let end = n - 1;
  // column과 row로 spiral로 삼각형의 크기가 작아지는 상황을 결정
  let column = 0;
  let row = n - 1;

  // triangle[세로라인][가로라인]
  triangle.map(v => {});
  return [];
}

solution(5); // [1,2,9,3,10,8,4,5,6,7]

/**
 * 풀이
 * 1. 정삼각형을 직각삼각형의 형태로 생각
 * 2. 세로줄, 가로줄, 대각선줄에 순차적으로 num값을 넣는다
 */
