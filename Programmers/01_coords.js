// !
/**
 * 직사각형이 되는 나머지 좌표 구하기
 * 인풋: [[1, 4], [3, 4], [3, 10]]
 * 아웃풋: [1, 10]
 */
function solution(v) {
  const coordX = v
    .map(x => x[0]) // [1, 3, 3]
    .filter(
      (value, i, arr) =>
        arr.indexOf(value) === i && arr.indexOf(value, i + 1) === -1,
    ); // true인 v를 반환
  const coordY = v
    .map(y => y[1]) // [4, 4, 10]
    .filter(
      (value, i, arr) =>
        arr.indexOf(value) === i && arr.indexOf(value, i + 1) === -1,
    );
  // console.log([...coordX, ...coordY]);
  return [...coordX, ...coordY];
}

function solution2(v) {
  const xCoords = v.map(c => c[0]);
  const yCoords = v.map(c => c[1]);

  const x = xCoords.find(
    (value, i, arr) => arr.indexOf(value) === arr.lastIndexOf(value),
  );
  const y = yCoords.find(
    (value, i, arr) => arr.indexOf(value) === arr.lastIndexOf(value),
  );
  console.log([x, y]);
  return [x, y];
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

/**
 * 풀이
 * 1. Array.prototype.map: 주어진 배열에서 x좌표만 추출
 * 2. Array.prototype.filter: x좌표만 담겨있는 배열에서 중복되지 않는 x좌표만 추출
 * 3-1. Array.prototype.indexOf: 원본배열의 각각의 요소를 검색하여 인수로 전달된 value와 일치하는 첫번째 요소의 index를 반환한다
 * -> 일치하는 요소가 없으면 -1을 반환한다
 * 3-2. Array.prototype.lastIndexOf: 원본 배열의 각각의 요소를 마지막부터 검색하여 일치하는 첫번째 요소의 index를 반환한다
 * -> 일치하는 요소가 없으면 -1을 반환한다
 */
