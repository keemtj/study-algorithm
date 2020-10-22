/**
 * 직사각형 별찍기
 * n: 가로의 길이
 * m: 세로의 길이
 * https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let str = '';
    for (let j = 0; j < a; j++) {
      str += '*';
    }
    console.log(str);
  }
});

/**
 * 풀이
 * 처음에 평소의 함수형태의 문제가 아니어서 당황했으나, data에 알아서 테스트케이스가 들어가 있었고
 * 그 값을 스플릿하여 각각의 인수로 나누어 놓은 것이 a, b이다
 * 그냥 단순하게 2중 for문을 이용하여 해결하였다
 */
