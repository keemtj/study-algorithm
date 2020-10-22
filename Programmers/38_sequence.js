/**
 * x만큼 간격이 있는 n개의 숫자
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴한다
 */

function solution(x, n) {
  let answer = [];
  let up = x;
  for (let i = 0; i < n; i++) {
    answer.push(up);
    up += x;
  }
  return answer;
}

solution(2, 5); // [2, 4, 6, 8, 10]

/**
 * 풀이1
 * 1. for문
 * 2. Array.prototype.push()
 */

function solution2(x, n) {
  const answer = Array.from({ length: n }, (_, i) => x + i * x);
  console.log(answer);
  return answer;
}

solution2(-2, 5);

/**
 * 풀이2
 * 1. Array.from: 유사배열객체, 이터러블 객체를 얕은 복사하여 새로운 Array객체를 만든다
 * Array.from(arrayLike[, mapFn[, thisArg]])
 * 2. 시퀀스 생성(range)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 * const range = (start, stop, step) =>
 *  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
 */
