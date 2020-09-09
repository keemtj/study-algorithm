/**
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
function solution1(dartResult) {
  let prevScore;
  let score = 0;
  let round = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (parseInt(dartResult[i]) === 0 && parseInt(dartResult[i - 1]) !== 1) {
      score = parseInt(dartResult[i]);
      console.log("숫자 및 자리수 판독", score);
      continue;
    }
    if (parseInt(dartResult[i]) && parseInt(dartResult[i + 1]) !== 0) {
      score = parseInt(dartResult[i]);
      console.log("숫자 및 자리수 판독", score);
      continue;
    }
    if (parseInt(dartResult[i]) === 1 && parseInt(dartResult[i + 1]) === 0) {
      score = 10;
      console.log("숫자 및 자리수 판독", score);
      continue;
    }
    if (dartResult[i] === "S") {
      score = score;
      if (dartResult[i + 1] !== "*" && dartResult[i + 1] !== "#") {
        round.push(score);
        prevScore = score;
      }
      continue;
    }
    if (dartResult[i] === "D") {
      score = score ** 2;
      if (dartResult[i + 1] !== "*" && dartResult[i + 1] !== "#") {
        round.push(score);
        prevScore = score;
      }
      continue;
    }
    if (dartResult[i] === "T") {
      score = score ** 3;
      if (dartResult[i + 1] !== "*" && dartResult[i + 1] !== "#") {
        round.push(score);
        prevScore = score;
      }
      continue;
    }
    if (dartResult[i] === "*") {
      console.log("prevScore?", prevScore);
      prevScore = prevScore * 2;
      score = score * 2;
      if (prevScore) {
        round[(i - 1) % 3] = prevScore;
      }
      round.push(score);
      continue;
    }
    if (dartResult[i] === "#") {
      score = score * -1;
      round.push(score);
      continue;
    }
  }
  console.log(round);
  const sum = round.reduce((a, b) => a + b, 0);
  console.log(sum);
  return sum;
}
// solution1("1S2D*3T"); // 37
// solution1("1D2S#10S"); // 9
// solution1("1D2S0T"); // 3
// solution1("1S*2T*3S"); // 23

// ! regExp
function solution2(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1, "": 1 };
  const regExp = /[\d]+[SDT][*#]?/g;
  let darts = dartResult.match(regExp);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/([\d]+)([SDT])([*#]?)/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    console.log(split);
    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  const answer = darts.reduce((a, b) => a + b);
  console.log(answer);
  return answer;
}

solution2("1S2D*3T"); // 37
solution2("1D2S#10S"); // 9
solution2("1D2S0T"); // 3
solution2("1S*2T*3S"); // 23
