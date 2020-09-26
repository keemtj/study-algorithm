/**
 * ! 해결
 * 완주하지 못한 선수 / 해시
 * 단 한명의 선수를 제외하고 모든 선수가 마라톤을 완주
 * ! 동명이인이 존재
 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  const diff = participant.find((p, i) => p !== completion[i]);
  return diff;
}

solution(['leo', 'kiki', 'eden'], ['eden', 'Eden', 'kiki']); // 'leo'
solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
); // 'vinko'
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']); // 'mislav'

/**
 * Array.prototype.sort(): **원본배열을 정렬
 * Array.prototype.find(): 조건을 만족하는 첫 번째 요소의 값을 반환, 없으면 undefined 반환
 */
