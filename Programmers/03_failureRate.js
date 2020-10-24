/**
 * 실패율 (2019 KAKAO BLIND RECRUITMENT)
 * 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
 * 전체스테이지 N, 게임을 이용하는 사용자가 멈춰있는 스테이지의 번호가 담긴 배열 stages
 * stages에는 1 ~ N + 1의 자연수가 담겨있다
 * 실패율이 높은 스테이지부터 내림차순으로 리턴
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0
 */

function solution(N, stages) {
  let failure = [];
  for (let i = 1; i <= N; i++) {
    const upStage = stages.filter(v => v >= i).length;
    const nowStage = stages.filter(v => v === i).length;
    const failureRate = nowStage / upStage;
    failure.push({ stage: i, failureRate });
  }
  const rank = failure.sort((a, b) => b.failureRate - a.failureRate);
  const answer = rank.map(v => v.stage);
  console.log(answer);
  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3, 4, 2, 1, 5];

/**
 * 풀이
 * 1. 스테이지에 맞게 for문을 작성한다
 * 2. 실패율을 구하기 위해 스테이지에 도달한 플레이어 수와 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수를 구한다
 * 3. 실패율만으로 sort할 경우 몇 스테이지가 앞서서 정렬되는지 알 수 없으므로, 객체 형태로 실패율을 모아둔 배열을 만든다(like todolist)
 * todolist = [{id: 1, rate: 0.1}, {id: 2, rate: 0.5}, ... , {id: N, rate: failureRate}]
 * 4. 실패율을 모아둔 배열에서 실패율이 높은 순서대로 정렬한 뒤 정렬된 배열에서 stage만 리턴한다
 *
 * 풀이3 과정에서 많이 막혔다. 배열의 index만 뽑아낼 생각도 해보고
 * 그걸 다시 새로운 배열에 담아 정렬하는 것도 방식이 잘못된 것 같아서 객체를 활용해야겠다고 고민하던 중
 * todolist의 배열객체 구조가 생각이 나서 바로 적용해보니 내가 생각한 것 처럼 손쉽게 해결되었다
 */
