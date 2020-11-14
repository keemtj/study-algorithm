/**
 * 소수찾기 (완전탐색)
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
 * 흩어진 종이 조각을 붙여 소수를 몇개 만들 수 있는지 알아내려 합니다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때,
 * 종이 조각으로 만들 수 있는 소수가 몇개인지 return
 */

// 1. combination 함수 만들기
// 2. prime number 판별 함수 만들기

function isPrimeNumber(arr) {
  arr = [...new Set(arr)];
  const result = arr.filter(number => {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  });
  return result;
}

function combination(numbers, str, arr) {
  if (+str > 1) arr.push(+str);
  for (let i = 0; i < numbers.length; i++) {
    const newNumbers = [...numbers];
    const pick = newNumbers.splice(i, 1);
    combination(newNumbers, str + pick, arr);
  }
}

function solution(numbers) {
  let arr = [];
  let str = '';
  combination([...numbers], str, arr);
  const primeArray = isPrimeNumber(arr);
  return primeArray.length;
}

solution('17');
solution('011');
