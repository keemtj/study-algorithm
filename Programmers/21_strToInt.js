/**
 * 문자열을 정수로 바꾸기
 * 문자열 s를 숫자로 변환한 결과를 리턴
 * s의 길이는 1 이상 5 이하
 * s의 맨앞에는 부호(+,-)가 올 수 있음
 * s는 부호와 숫자로만 이루어져 있음
 * s는 '0'으로 시작하지 않음
 */

function solution(s) {
  const answer = parseInt(s, 10);
  return answer;
}

solution('+1234'); // 1234
solution('-1234'); // -1234
