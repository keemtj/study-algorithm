/**
 * 가장 큰 수
 * (정렬)
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 * 예를 들어,
 * 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
 * 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */

function solution(numbers) {
  const result = numbers
    .map(v => String(v))
    // .map(v => v + '') // 다른 사람 풀이, js의 타입변환
    .sort((a, b) => {
      if (a + b > b + a) {
        return -1;
      } else if (a + b < b + a) {
        return 1;
      } else {
        return 0;
      }
    })
    .join('');
  // const answer = String(parseInt(result, 10));
  if (result[0] === '0') return '0';
  return result;
}

solution([0, 0, 0]);
solution([0, 10, 0]);
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);

function solution2(numbers) {
  const answer = numbers
    .map(v => String(v))
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('');
  if (answer[0] === '0') return '0';
  return answer;
}

solution2([0, 0, 0]);
solution2([0, 10, 0]);
solution2([6, 10, 2]);
solution2([3, 30, 34, 5, 9]);

/**
 * 풀이
 * sort() 메서드의 파라미터 compareFn의 원리에 대해서 한번더 공부하자!
 *
 * solution1
 * sort메서드의 파라미터 compareFn 정리해놓기
 *
 * solution2
 * String()관련 mdn을 보다가 예전에 사용했던 localeCompare() 메서드가 보여서
 * 이 방법으로 시도했는데 정답이지만 속도가 많이 느리다
 *
 * solution3(맨 처음 풀이)
 * 프로그래머스 기본 테스트 케이스에서 떨어졌는데,
 * 문자열로 파싱한 v값을 모두 스프레드로 풀어버리는 바람에
 * 잘못된 계산이 나왔다
 * 처음에는 틀린 이유를 모르다가 뒤늦게 알게되었다
 */

/**
 * 맨 처음 풀이... 풀다가 잘못 생각했다.
 */
function solution3(numbers) {
  const answer = numbers
    .map(v => [...String(v)])
    .flat()
    .sort((a, b) => b - a)
    .join('');
  return answer;
}

solution3([0, 0, 0]);
solution3([0, 10, 0]);
solution3([6, 10, 2]);
solution3([3, 30, 34, 5, 9]);
