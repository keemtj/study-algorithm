/**
 * 시저암호
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
 * 'AB'는 1만큼 밀면 'BC'가 되고, 3만큼 밀면 'DE'가 된다
 * 'z'는 1만큼 밀면 'a'가 된다
 * 공백은 아무리 밀어도 공백이다
 */

// 암호화
function solution(s, n) {
  // const large = [
  //   'A',
  //   'B',
  //   'C',
  //   'D',
  //   'E',
  //   'F',
  //   'G',
  //   'H',
  //   'I',
  //   'J',
  //   'K',
  //   'L',
  //   'M',
  //   'N',
  //   'O',
  //   'P',
  //   'Q',
  //   'R',
  //   'S',
  //   'T',
  //   'U',
  //   'V',
  //   'W',
  //   'X',
  //   'Y',
  //   'Z',
  // ];
  // const small = large.map(l => l.toLowerCase());
  const large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const small = 'abcdefghijklmnopqrstuvwxyz';
  const largeLen = large.length;
  const smallLen = small.length;
  const cipher = [...s]
    .map(str => {
      if (str === ' ') return str;
      if (str === str.toUpperCase()) {
        console.log(str, (large.indexOf(str) + n) % largeLen);
        return large[(large.indexOf(str) + n) % largeLen];
      }
      if (str === str.toLowerCase())
        return small[(small.indexOf(str) + n) % smallLen];
    })
    .join('');
  console.log(cipher);
  return cipher;
}

/**
 * 풀이
 * 1. large 배열, small 배열
 * 2. Array.prototype.map(): 주어진 s를 순회하면서 조건에 맞게 리턴
 * 3. Array.prototype.indexOf()
 * 4. String.prototype.toUpperCase(): 대문자
 * 5. String.prototype.toLowerCase(): 소문자
 * 6. 주어진 n값에 맞게 알파벳의 순서를 바꿔 줄 수 있도록 index를 입력
 *    n의 값이 무한정으로 올라가도 계속해서 알파벳의 순서를 바꿔줄 수 있다
 * 7. large, small의 length를 변수로 두어 각각의 값이 바뀌어도 원하는 값을 리턴할 수 있다
 */

solution('This is Caesar Cipher', 10);
solution('I love you', 8);

// 복호화
function solution2(s, n) {
  // const m = 26 - n;
  n = 26 - n;
  const large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const small = 'abcdefghijklmnopqrstuvwxyz';
  const largeLen = large.length;
  const smallLen = small.length;
  const cipher = [...s]
    .map(str => {
      if (str === ' ') return str;
      if (str === str.toUpperCase())
        return large[(large.indexOf(str) + n) % largeLen];
      if (str === str.toLowerCase())
        return small[(small.indexOf(str) + n) % smallLen];
    })
    .join('');
  console.log(cipher);
  return cipher;
}

solution2('Drsc sc Mkockb Mszrob', 10);
solution2('Q twdm gwc', 8);
