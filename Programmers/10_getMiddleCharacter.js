/**
 * 가운데 글자 가져오기
 *
 * 단어 s의 가운데 글자를 반환하는 함수 작성
 * 단어의 길이가 짝수라면 가운데 두글자를 반환
 * s는 길이가 1이상, 100이하인 string
 */

function solution(s) {
  const len = s.length;
  const answer =
    len % 2
      ? s[Math.floor(len / 2)]
      : `${s[len / 2 - 1]}${s[Math.floor(len / 2)]}`;
  return answer;
}

function solution2(s) {
  const len = s.length;
  const middle = Math.floor(len / 2);
  return len % 2 ? s[middle] : s[middle - 1] + s[middle];
}

solution('ab'); // 'ab'
// solution('abcde'); // 'c'
// solution('qwer'); // 'we'

solution2('ab'); // 'ab'
solution2('abcde'); // 'c'
solution2('qwer'); // 'we'

/**
 * 풀이
 * 1. 삼항연산자: condition ? value1 : value2;
 * condition이 truthy면 value1, falsy면 value2를 반환한다
 * let example = number > 10 ? true : false;
 * 위 example에서 condition의 경우 비교연산자 자체가 boolean(true, false)값을 반환하기 때문에
 * let exapmle = number > 10;과 동일한 결과를 반환한다
 * 2. Math.floor(x): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 integer로 반환한다(내림)
 * ! Math.floor(null)은 NaN대신 0을 반환한다
 * ! Math.floor(undefined)은 NaN을 반환한다
 * 3. Math.ceil(x): 주어진 숫자와 같거나 큰 정수 중에서 가장 작은 수를 integer로 반환한다(올림)
 */
