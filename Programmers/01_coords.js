// 직사각형의 나머지 좌표 구하기

function solution(v) {
  const x = v
    .map((x) => x[0]) // [1, 3, 3]
    .filter((v, i, arr) => arr.indexOf(v) === i && arr.indexOf(v, i + 1) !== i); // true인 v를 반환
  const y = v
    .map((y) => y[1]) // [4, 4, 10]
    .filter((v, i, arr) => arr.indexOf(v) === i && arr.indexOf(v, i + 1) !== i);
  console.log(x, y);
  return [...x, ...y];
}

solution([
  [1, 4],
  [3, 4],
  [3, 10],
]); // [1,10]
solution([
  [1, 10],
  [3, 4],
  [3, 10],
]); // [1,4]
solution([
  [1, 4],
  [1, 10],
  [3, 10],
]); // [3,4]
solution([
  [1, 4],
  [3, 4],
  [1, 10],
]); // [3,10]
