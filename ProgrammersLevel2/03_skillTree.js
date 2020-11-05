/**
 * summer/winter coding (2018)
 * 스킬트리
 * 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻한다
 * 예를 들어, 스파크 -> 라이트닝 볼트 -> 썬더
 * 위 순서에 없는 다른 스킬은 순서에 상관없이 배울 수 있다
 * 선행스킬순서(skill), 유저의 스킬트리(skill_trees), 가능한 스킬트리 개수를 리턴
 */

function solution(skill, skill_trees) {
  let answer = [];
  let user = '';
  for (let i = 0; i < skill_trees.length; i++) {
    user = [...skill_trees[i]].filter(v => skill.includes(v)).join('');
    [...skill].slice(0, user.length).join('') === user && answer.push(true);
  }
  return answer.length;
}

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);

/**
 * 풀이
 * C -> B -> D (순서가 중요 === index로 비교?)
 * 처음에는 두 배열의 인덱스만 비교하려 했으나 과정이 복잡하여 코드를 전부 지우고 새로 생각했다
 * 단순하게 string === string으로 비교할 경우 true, false로 확실하게 알 수 있기 때문에 그 방식을 사용했다
 * skill이 skill_trees에서 각각의 skill_tree를 포함하고 있는 것만 따로 filtering한 결과를 user의 스킬트리로 구성했다
 * user의 스킬트리와 주어진 스킬트리의 길이를 일치시켜(= 'ABC'스킬순서에서 유저가 'AB'스킬을 배웠을 경우, 길이를 일치시켜 'AB'스킬순서, 'AB' 유저스킬순서) 두 결과를 비교한뒤 일치하는 결과만 리턴했다
 */
