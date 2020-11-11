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

/**
 * 풀이
 * s에서 반복되는 패턴이 나올 수 있는 최대 split(maxSplit) 갯수가 Math.floor(s.length / 2)길이인데
 * 문자열 s.length === 1인 경우를 생각해서 + 1을 더했다.
 * ex) aaaa -> 패턴이 나올수 있는 문자열 조합 길이가 1('a'), 2('aa'), 3('aaa'), 4('aaaa')인데
 * 3이상부터는 패턴체크를 하는 것이 의미가 없기 때문이다 ('aaa', 'a'), ('aaaa')
 *
 * split++, 즉 패턴의 길이가 증가하면서 maxSplit길이와 같아질 때까지 while문을 실행했다
 * while문 안에서 splitString함수를 통해 리턴된 배열을 가지고 for문을 실행하면서 패턴이 같은지 다른지 체크하고
 * 같은 패턴일경우 카운트를 올려주고, 다른 패턴일 경우 그 값을 arr 배열에 push하도록 했다
 *
 * 그렇게 나온 arr배열의 요소를 join('') 한 뒤 그 길이를 result 배열에 push하도록 했다
 *
 * result배열에서 가장 최소값을 Math.min() 메서드를 통해 구해 정답으로 리턴했다
 */
