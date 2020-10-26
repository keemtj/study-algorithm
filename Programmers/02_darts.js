/**
 * 다트게임 (2018 KAKAO BLIND RECRUITMENT, Round1)
 * 1. 3번의 기회
 * 2. 획득 가능한 점수: 0 ~ 10
 * 3. bonus; Single(S): 점수에서 1제곱, Double(D): 점수에서 2제곱, Triple(T): 점수에서 3제곱
 * 4. option; 스타상(*): 해당점수와 바로 전에 얻은 점수를 각각 2배, 아차상(#): 해당 점수만 (-)감점
 * 5. 스타상(*)은 첫 번째 기회에서도 나올 수 있고, 이때는 첫번째 *의 점수만 2배
 * 6. *의 효과는 다른 *의 효과와 중첩가능, 중첩된 * 점수는 4배
 * 7. *과 #의 효과는 중첩가능, 중첩된 #의 점수는 -2배
 * 8. S, D, T는 점수마다 하나씩 존재
 * 9. *, #은 점수마다 둘 중 하나씩 존재 혹은 둘다 없을 수 있다.
 * 다트점수 결과: 점수|보너스|[옵션] 으로 이루어진 문자열 3세트
 */

function solution(dartResult) {
  const regSplitGames = /[0-9]+[SDT][*#]?/g;
  const splitGames = dartResult.match(regSplitGames);
  console.log(splitGames);
  const regScore = /[0-9]+/g;
  const regBonus = /[SDT]+/g;
  const regOption = /[*#]+/g;
  let board = [];
  let eachScore = [];

  for (let i = 0; i < splitGames.length; i++) {
    const score = splitGames[i].match(regScore)[0];
    const bonus = splitGames[i].match(regBonus)[0];
    const option = splitGames[i].match(regOption)?.[0];
    board.push({
      score: parseInt(score, 10),
      bonus: bonus === 'S' ? 1 : bonus === 'D' ? 2 : 3,
      option: option === '*' ? 2 : option === '#' ? -1 : 1,
    });
    eachScore.push(board[i].score ** board[i].bonus * board[i].option);
  }
  console.log(eachScore);
}

solution('1S2D*3T'); // 37
