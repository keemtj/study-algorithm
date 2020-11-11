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
  const maxSplit = Math.floor(s.length / 2) + 1;

  let split = 1;
  let result = [];
  while (split <= maxSplit) {
    const array = splitString(s, split);
    let count = 1;
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        count++;
      }
      if (array[i] !== array[i + 1]) {
        arr.push(`${count === 1 ? '' : count}${array[i]}`);
        count = 1;
      }
    }
    result.push(arr.join('').length);
    split++;
  }

  const answer = Math.min(...result);
  console.log(answer);
  return answer;
}

solution('a');
solution('abcabcabcabcdededededede'); // 14
