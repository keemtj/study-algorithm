/**
 * ! 해결
 * 모의고사
 * 수포자 3인방이 수학문제를 전부 찍으려고 한다
 * 정답 배열 answers
 * 가장많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
 * 동률일 경우 오름차순 return
 */

function solution(answers) {
  let case1 = [];
  let case2 = [];
  let case3 = [];
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    case1 = [...case1, pattern1[i % pattern1.length]];
    case2 = [...case2, pattern2[i % pattern2.length]];
    case3 = [...case3, pattern3[i % pattern3.length]];
  }

  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    console.log(case1[i], ':', answers[i]);
    case1[i] === answers[i] && (count[0] += 1);
    case2[i] === answers[i] && (count[1] += 1);
    case3[i] === answers[i] && (count[2] += 1);
  }
  console.log(count);
  const rank = count.map((v, i, arr) => {
    if (v === Math.max(...count)) {
      console.log(i + 1);
      return i + 1;
    }
  });
  console.log(rank);
  const answer = rank.filter(v => v !== undefined);
  console.log(answer);
  return answer;
}

solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]

/**
 * 풀이
 * 1. answers.length와 수포자의 정답pattern.length를 일치시킨다
 * 2. answers의 정답과 수포자의 정답이 같은지 비교하여 정답 개수를 count한다
 * 3. count 갯수에서 1등으로 점수가 높은 수포자와 현재 카운트 개수를 비교하여 등수를 도출한다
 */
