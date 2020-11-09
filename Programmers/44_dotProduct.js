/**
 * 내적
 * 월간 코드 챌린지 시즌1
 *
 * 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
 * a와 b의 내적을 return
 *
 * a와 b의 내적 = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
 * (n = a, b의 길이)
 * a, b는 -1,000 ~ 1,000
 */

// function solution(a, b) {
//   let arr = [];
//   a.forEach((_, i) => {
//     arr.push(a[i] * b[i]);
//   });
//   const answer = arr.reduce((acc, cur) => acc + cur, 0);
//   console.log(answer);
//   return answer;
// }

function solution(a, b) {
  let sum = 0;
  a.forEach((_, i) => {
    sum += a[i] * b[i];
  });
  return sum;
}

function solution(a, b) {
  const answer = a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
  return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // 3
solution([-1, 0, 1], [1, 0, -1]);

/**
 * 풀이
 * 내적에 대해서는 잘 모르지만 스칼라, 벡터에 관한 내용인듯 하다.
 * 문제에서 a,b의 내적을 구하는 공식을 써놓았으므로 쉽게 문제를 풀 수 있었다
 * 다양한 풀이가 있는데 arr배열을 만드는 것이 아닌 순회하는 과정에서 바로 a[i]*b[i]를 sum 변수에 더해주는 방법이다
 * (아무래도 내 방식인 새로운 배열을 생성하고 그 배열의 요소를 순회하며 다시 계산하는 것이 속도가 느릴 수 밖에 없다)
 * reduce메서드 한줄로 해결한 사람들도 있었다
 * 효율: sum > reduce > 내방식
 */
