/**
 * 정수 내림차순으로 배치하기
 * 정수 n의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 리턴
 */
function solution(n) {
  const answer = +[...n.toString()].sort().reverse().join('');
  console.log(typeof answer, answer);
  return answer;
}

solution(1180372); // 8732110

/**
 * 풀이
 * 처음 풀이 과정에서 sort() 이전에 map함수를 사용하여 각각의 요소를 문자열에서 숫자로 바꾸어 주었으나
 * sort() 메소든는 문자열 정렬을 기본으로 하기 때문에 굳이 map함수를 쓸 필요가 없고,
 * 숫자를 정렬할 경우 제대로된 정렬이 안이루어 질 수도 있다.
 * 다행히 이 문제에서는 각각의 자리가 모두 일의 자릿수이기때문에 sort()를 사용하는데 있어서 큰 문제는 발생하지 안았다
 * 여러 문제에서 [...n.toString()]을 사용해 주었는 데 이와 같은 풀이는 n.toString().split('')과 같다
 */
