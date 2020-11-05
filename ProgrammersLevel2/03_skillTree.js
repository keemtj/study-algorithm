/**
 * summer/winter coding (2018)
 * 스킬트리
 * 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻한다
 * 예를 들어, 스파크 -> 라이트닝 볼트 -> 썬더
 * 위 순서에 없는 다른 스킬은 순서에 상관없이 배울 수 있다
 * 선행스킬순서(skill), 유저의 스킬트리(skill_trees), 가능한 스킬트리 개수를 리턴
 */

function solution(skill, skill_trees) {
  let order = {};
  for (let i = 0; i < skill.length; i++) {
    order[skill[i]] = i + 1;
  }

  let answer = 0;
  skill_trees.forEach(st => {
    const index = [...st].map(s => order[s]).filter(v => v);
    console.log(index, index[0]);
    if (index[0] !== 1) {
    } else {
    }
  });
  console.log(answer);
  return answer;
}

solution('AB', ['BACDE', 'CBADF', 'AECB', 'BDA']);

/**
 * C -> B -> D (순서가 중요 === index로 비교?)
 */
