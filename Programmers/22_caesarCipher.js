/**
 * 시저암호
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
 * 'AB'는 1만큼 밀면 'BC'가 되고, 3만큼 밀면 'DE'가 된다
 * 'z'는 1만큼 밀면 'a'가 된다
 * 공백은 아무리 밀어도 공백이다
 */

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
  const cipher = [...s]
    .map(str => {
      if (str === ' ') return ' ';
      if (str === str.toUpperCase())
        return large[(large.indexOf(str) + n) % 26];
      if (str === str.toLowerCase())
        return small[(small.indexOf(str) + n) % 26];
    })
    .join('');
  console.log(cipher);
  return cipher;
}
solution('ABCDE', 0);
solution('ABCDE', 1);
solution('ABCDE', 2);
solution('ABCDE', 3);
solution('ABCDE', 4);
solution('ABCDE', 5);
solution('ABCDE', 6);
solution('ABCDE', 7);
solution('ABCDE', 8);
solution('ABCDE', 9);
solution('ABCDE', 10);
solution('ABCDE', 11);
solution('ABCDE', 12);
solution('ABCDE', 13);
solution('ABCDE', 14);
solution('ABCDE', 15);
solution('ABCDE', 16);
solution('ABCDE', 17);
solution('ABCDE', 18);
solution('ABCDE', 19);
solution('ABCDE', 20);
solution('ABCDE', 21);
solution('ABCDE', 22);
solution('ABCDE', 23);
solution('ABCDE', 24);
solution('ABCDE', 25);
solution('abcde', 0);
solution('abcde', 1);
solution('abcde', 2);
solution('abcde', 3);
solution('abcde', 4);
solution('abcde', 5);
solution('abcde', 6);
solution('abcde', 7);
solution('abcde', 8);
solution('abcde', 9);
solution('abcde', 10);
solution('abcde', 11);
solution('abcde', 12);
solution('abcde', 13);
solution('abcde', 14);
solution('abcde', 15);
solution('abcde', 16);
solution('abcde', 17);
solution('abcde', 18);
solution('abcde', 19);
solution('abcde', 20);
solution('abcde', 21);
solution('abcde', 22);
solution('abcde', 23);
solution('abcde', 24);
solution('abcde', 25);
