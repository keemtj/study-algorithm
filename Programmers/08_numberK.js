/**
 * ! 해결
 * K번째 수
 * array의 i번째숫자부터 j번째 숫자까지 자르고 정렬했을 때 K번째의 수는?
 * array = [1,5,2,6,3,7,4]에서 i = 2, j = 5, k = 3 / [2, 5, 3]
 * 1. 2(i)~5(j)면 [5, 2, 6, 3]
 * 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]
 * 3. 2에서 나온 배열의 3(k)번째 숫자는 5
 * 4. k번째 숫자로 이루어진 배열 return
 */

function solution(array, commands) {
  const i = commands.map((_, index, arr) => arr[index][0]);
  const j = commands.map((_, index, arr) => arr[index][1]);
  const k = commands.map((_, index, arr) => arr[index][2]);

  let answer = [];
  for (let l = 0; l < commands.length; l++) {
    const cut = array.slice(i[l] - 1, j[l]).sort((a, b) => a - b);
    // answer.push(cut[k[l] - 1]);
    answer = [...answer, cut[k[l] - 1]];
  }

  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
); // [5, 6, 3]

/**
 * 풀이
 * 1. i, j, k를 담은 배열을 만든다
 * 2. Array.prototype.map(): 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
 * 2. Array.prototype.slice(begin, end): begin부터 end(미포함)까지에 대한 얕은 복사본을 새로운 배열객체로 반환한다
 * 3. Array.prototype.sort(): 기본적으로 오름차순정렬을 한다. 단, 숫자 요소의 배열의 경우 유니코드 코드 포인트에 따라 정렬하므로 주의가 필요하다
 *                            sort((a, b) => a - b), sort((a, b) => b - a)
 * 3. Array.prototype.push(): 원본 배열의 마지막에 인수로 전달 받은 값을 추가한다.
 *                            const arr = [1, 2];
 *                            let result = arr.push(3, 4);일 경우 result값은 원본배열의 length이다
 *                            push 메서드 대신 스프레드 문법을 사용할 수 있다.
 */
