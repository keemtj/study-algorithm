/**
 * 비밀지도 (2018 KAKAO BLIND RECRUITMENT, round1)
 * 1. 지도의 한변의 길이는 n, 각 칸은 공백(" ")또는 벽("#")으로 이루어짐
 * 2. 지도1 또는 지도2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽
 * 3. 지도1과 지도2 모두 공백인 부분은 전체 지도에서도 공백
 * 4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백부분을 0으로 부호화했을 때 얻어지는 이진수 값의 배열
 */

function binaryArray(n, arr) {
  return arr.map(v => {
    const binary = v.toString(2);
    return binary.length < n
      ? `${'0'.repeat(n - binary.length)}${binary}`
      : binary;
  });
}

function solution(n, arr1, arr2) {
  const binaryArr1 = binaryArray(n, arr1);
  const binaryArr2 = binaryArray(n, arr2);
  console.log(binaryArr1, binaryArr2);
  const combinedMap = binaryArr1.map((v1, i) =>
    [...v1].map((v2, j) =>
      parseInt(v2, 10) + parseInt(binaryArr2[i][j], 10) ? '#' : ' ',
    ),
  );
  const answer = combinedMap.map(v => v.join(''));
  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// ["#####","# # #", "### #", "# ##", "#####"] (전체 지도)

/**
 * 풀이
 * 1. 기존 arr1, arr2를 이진수로 변환된 배열로 바꾸어준다
 * 2. 이때 문제를 위해 이진수의 자리수를 5자리로 맞추기 위해 n보다 length값이 적으면 0을 붙여준다
 * 3. binaryArr1, binaryArr2의 동일한 index의 요소끼리 결합하여 0인지 아닌지 판별하고 '#' 또는 ' '를 리턴한다
 *
 * 1. Array.prototype.map()
 * 2. Number.prototype.toString(): numObj.toString([radix]), 진수를 나타내는 기수의 값 radix(2~36)를 넣어 변환 할 수 있다
 * 3. String.prototype.repeat(): str.repeat(count), str을 count만큼 반복하여 붙인 새로운 문자열을 반환한다
 * 4. parseInt(): parseInt(string, radix), string을 radix에 맞게 숫자로 변환해준다(기본값이 10이 아님에 주의한다)
 * 5. Array.prototype.join(): arr.join([separator]), separator로 구분된 하나의 문자열로 반환한다
 *
 * 참고
 * 비트 연산자 - JavaScript | MDN
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
 * bit or연산자(|): 피연산자를 비트로 바꿨을 때 각각 대응하는 비트가 모두 1이거나 한쪽이 1이면 1을 반환한다
 */
