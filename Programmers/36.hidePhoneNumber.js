/**
 * 핸드폰 번홓 가리기
 * 전화번호 문자열의 맨 뒷자리 4자리를 제외한 나머지 숫자를 전부 '*'로 가린 문자열 리턴
 */

function solution(phone_number) {
  const hidden_number = [...phone_number]
    .map((v, i, arr) => (i >= arr.length - 4 ? v : '*'))
    .join('');
  console.log(hidden_number);
  return hidden_number;
}

solution('027778888'); // '*******4444'
solution('01064154738'); // '*******4444'
solution('010641547389999'); // '*******4444'
