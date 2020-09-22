/**
 * 2019 KAKAO BLIND RECRUITMENT - 실패율
 * @param N stage 개수
 * @param stages stages.length = users.length
 * 1 <= stages value <= N + 1(=마지막 스테이지 N까지 클리어한 사용자)
 * 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 실패율의 내림차순
 * 실패율이 같은 경우 작은 번호의 스테이지가 먼저 오도록 오름차순
 */
function solution(N, stages) {
  console.log(N, stages);
  const answer = [];
  // let failureRate = stage1 / stage1.length;
  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // 실패율 = [3, 4, 2, 1, 5];
