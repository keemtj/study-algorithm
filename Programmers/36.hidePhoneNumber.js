/**
 * 전화번호 가리기
 * 전화번호 문자열의 맨 뒷자리 4자리를 제외한 나머지 숫자를 전부 '*'로 가린 문자열 리턴
 */

// function solution(phone_number) {
//   const hidden_number = [...phone_number]
//     .map((v, i, arr) => (i >= arr.length - 4 ? v : '*'))
//     .join('');
//   console.log(hidden_number);
//   return hidden_number;
// }

// function solution(phoneNumber) {
//   const last4Digits = phoneNumber.slice(-4);
//   console.log(last4Digits);
//   const answer = last4Digits.padStart(phoneNumber.length, '*');
//   console.log(answer);
//   return answer;
// }

function solution(phoneNumber) {
  const last4Digits = phoneNumber.slice(-4);
  const answer = '*'.repeat(phoneNumber.length - 4) + last4Digits;
  console.log(answer);
  return answer;
}
solution('0277778888'); // '******8888'

/**
 * 풀이
 * 1. Array.prototype.map()
 * 2. Array.prototype.join();
 * 전화번호를 순회하면서 인덱스 조건에 맞게 리턴하였다
 * arr.length - 4는 전체 전화번호의 길이에 상관없이 끝 4자리에 대한 의미를 갖고 있다.
 * 끝 4자리이면 원래 번호 그대로 리턴하고, 그렇지 않으면 '*'로 리턴한다
 */
