/**
 * 문자열 압축
 * 2020 KAKAO BLIND RECRUITMENT
 * 압축할 문자열 s가 매개변수로 주어질 때
 * 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return
 */

function splitString(s, split) {
  let arr = [];
  for (let i = 0; i < s.length; i += split) {
    const piece = [...s].slice(i, i + split).join('');
    arr.push(piece);
  }
  return arr;
}

function solution(s) {
  const maxSplit = Math.floor(s.length / 2);

  let split = 1;
  while (split <= maxSplit) {
    const array = splitString(s, split);
    let answer = [];
    let temp = array[0];
    let count = 1;
    array.forEach((v, i, arr) => {
      if (temp === arr[i + 1]) {
        count++;
        console.log(count);
      } else {
        answer.push(`${count === 1 ? '' : count}${temp}`);
        temp = v;
        count = 1;
      }
    });
    console.log(answer);
    split++;
  }
  return 0;
}

solution('abcabcabcabcdededededede'); // 14
