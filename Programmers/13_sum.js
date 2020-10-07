/**
 * 두 정수 사이의 합
 * 두 정수 a, b가 주어졌을 때 a, b사이에 속한 모든 정수의 합을 리턴
 * a, b가 같은 경우 둘 중 아무 수나 리턴
 * a, b는 -10,000,000이상 10,000,000이하의 정수
 */

function solution(a, b) {
  let arr = [];
  const len = Math.abs(a - b) + 1;
  for (let i = 0; i < len; i++) {
    if (a === b) {
      arr.push(a);
    }
    if (a < b) {
      arr.push(a);
      a++;
    }
    if (a > b) {
      arr.push(b);
      b++;
    }
  }
  const answer = arr.reduce((a, b) => a + b, 0);
  return answer;
}

solution(3, 5); // 12
solution(5, 3);
solution(-10, 1); // 0
solution(3, 3); // 3

/**
 * 풀이1
 * 1. Math.abs(x): x의 절대값
 * 2. Array.prototype.reduce(): 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고 하나의 결과값을 리턴
 */

function solution2(a, b) {
  console.log(((a + b) * (Math.abs(a - b) + 1)) / 2);
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

solution2(1, 5);
solution2(3, 5); // 12
solution2(5, 3);
solution2(-10, 1); // 0
solution2(3, 3); // 3

/**
 * 풀이2
 * !등차수열의 제n항부터 제m항까지의 합 S
 * 제 n항이 a, 마지막 m항이 b일 때: S = (|m - n| + 1) * (a + b) / 2
 */
