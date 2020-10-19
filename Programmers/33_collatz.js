/**
 * 콜라츠 추측
 * 아래의 작업을 반복하여 숫자 1 만들기
 * 1. 입력된 수가 짝수라면 2로 나눕니다
 * 2. 입력뙨 수가 홀수라면 3을 곱하고 1을 더합니다
 * 3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다
 * 위의 작업 반복 횟수를 반환, 500회가 넘어가면 -1 밚환
 */

function solution(num) {
  let count = 0;
  while (num > 1) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    count += 1;
    if (count > 500) {
      count = -1;
      break;
    }
  }
  return count;
}

solution(6); // 8
solution(626331); // -1

/**
 * 풀이
 * 1. while문을 이용하여 반복작업한다
 * 2. 반복문의 끝에서 count를 증가시킨다
 * 3. break문을 통해 while문을 빠져나온다
 */
