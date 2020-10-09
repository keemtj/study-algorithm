/**
 * 문자열 내림차순으로 배치하기
 * 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
 * s는 영문 대소문자로만 구성
 * 대문자는 소문자보다 작은 것으로 간주
 */

function solution(s) {
  const large = [...s]
    .filter(str => str === str.toUpperCase())
    .sort()
    .reverse();
  const small = [...s]
    .filter(str => str === str.toLowerCase())
    .sort()
    .reverse();
  const desc = [...small, ...large];
  const answer = desc.reduce((a, b) => a + b, '');
  return answer;
}

solution('Zbcdefg');
solution('abeeEffKA');

/**
 * 풀이
 * 1. Array.prototype.filter()
 * 2. String.prototype.toUpperCase()
 * 3. Stringg.prototype.toLowerCase()
 * 4. Array.prototype.sort()
 * 5. Array.prototype.reverse(): 배열 역순
 * 6. Array.prototype.reduce()
 * str값과 str을 대문자 혹은 소문자로 치환했을 때의 값이 서로 일치한지 확인하여 대소문자를 구분하여 새로운 배열 생성
 * 새로운 배열에 대해 정렬(sort())한 뒤 역순으로 재정렬(reverse())
 * 대, 소문자배열을 하나로 합침(concat 혹은 스프레드)
 * reduce 메소드를 통해 각각의 요소를 더하여 새로운 문자열값으로 반환
 */

function solution2(s) {
  const answer = [...s].sort().reverse().join('');
  console.log(answer);
  return answer;
}

/**
 * 풀이2
 * 1. s를 split 혹은 스프레드로 배열화
 * 2. 정렬(sort())
 * 3. 역순 정렬(reverse())
 * 4. ''기준으로 병합(join(''))
 */

solution2('Zbcdefg');
solution2('abeeEffKA');

/**
 * sort() 활용 정리
 * 1. 자바스크립트의 sort는 기본적으로 문자열을 기준으로 오름차순으로 정렬한다
 * 2. 대문자가 소문자보다 우선순위에 있다
 * 3. localeCompare()메소드는 영어알파벳 이외의 문자들도 사전적 순서로 비교할 수 있다
 * 4. 숫자 정렬의 경우 compareFn을 통해 비교할 수 있다
 */
