// ! 해결
/**
 * 정수 배열 numbers가 주어집니다.
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
 * 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  let sumArray = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      sumArray.push(sum);
      console.log(`i = ${i}, j = ${j} |`, sum);
    }
  }
  const result = [...new Set(sumArray)].sort((a, b) => a - b);
  return result;
}

solution([2, 1, 3, 4, 1, 10, 100, 77]);

/**
 * 풀이
 * for, Set, spread, sort
 */
