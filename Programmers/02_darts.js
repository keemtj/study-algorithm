/**
 * ! 미해결 - 정답 확인
 * 2018 KAKAO BLIND RECRUITMENT - 다트 게임
 * ? 점수: 0~10사이의 정수
 * ! 0점
 * ! 1~9점: 1자리수
 * ! 10점: 2자리수
 * ? 보너스: S(1제곱), D(2제곱), T(3제곱)
 * ? 옵션: *이나 # 중 하나이며, 없을 수도 있다.
 * ! *: 이전 점수, 현재 점수 * 2
 * ! #: 현재 점수 * (-1)
 * ? 총 3게임 (1게임: 점수|보너스|[옵션])
 */

solution1('1S2D*3T'); // 37
solution1('1D2S#10S'); // 9
solution1('1D2S0T'); // 3
solution1('1S*2T*3S'); // 23

// ! regExp
function solution2(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '*': 2, '#': -1, '': 1 };
  const regExp = /[\d]+[SDT][*#]?/g;
  const darts = dartResult.match(regExp);

  for (let i = 0; i < darts.length; i++) {
    const split = darts[i].match(/([\d]+)([SDT])([*#]?)/);
    const score = split[1] ** bonus[split[2]] * options[split[3]];
    console.log(split);
    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
    darts[i] = score;
  }

  const answer = darts.reduce((a, b) => a + b);
  console.log(answer);
  return answer;
}

solution2('1S2D*3T'); // 37
solution2('1D2S#10S'); // 9
solution2('1D2S0T'); // 3
solution2('1S*2T*3S'); // 23
