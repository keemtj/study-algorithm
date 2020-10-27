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
  const regexp = /[0-9]+[SDT][*#]?/g;
  const darts = dartResult.match(regexp);
  let score = [];
  let bonus = [];
  let option = [];
  const bonusObj = { S: 1, D: 2, T: 3 };
  const optionObj = { '*': 2, '#': -1 };

  for (let i = 0; i < darts.length; i++) {
    score.push(parseInt(darts[i].match(/[0-9]+/)[0], 10));
    bonus.push(darts[i].match(/[SDT]/)[0]);
    darts[i].match(/[*#]+/)
      ? option.push(darts[i].match(/[*#]+/)[0])
      : option.push(1);
  }

  console.log(score, bonus, option);
  for (let i = 0; i < score.length; i++) {
    score[i] **= bonusObj[bonus[i]];
    if (option[i] === '*') {
      score[i] *= optionObj[option[i]];
      score[i - 1] *= optionObj[option[i]];
    } else if (option[i] === '#') {
      score[i] *= optionObj[option[i]];
    } else {
      score[i] *= 1;
    }
  }

  const sum = score.reduce((a, b) => a + b, 0);
  return sum;
}

solution('1S2D*3T#'); // 37

/**
 * 풀이
 * 1. 정규표현식
 * 2. score, bonus, option, bonusObj, optionObj로 구분
 * 3. 점수 계산
 *
 * 정규표현식을 사용하지 않고 해결하면 score, bonus, option을 구분하는데 있어서 비교해야되는 조건이 엄청 많아진다
 * 정규표현식에 대한 최소한의 공부는 필요하다고 느꼈다
 * score, bonus, option, bonusObj, optionObj로 구분하였는데 이 방법보다 좋은 방법이 있는지 더 생각해봐야 할 듯 하다
 */
