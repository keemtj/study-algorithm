/**
 * 큰 수 만들기
 * (탐욕법)
 * 어떤 숫자에서 k개의 수를 제거하여 얻을 수 있는 가장 큰 숫자를 구하려한다
 * 숫자 1924에서 수 두 개(k = 2)를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다.
 * 이 중 가장 큰 숫자는 94 입니다.
 */

function solution(number, k) {
  number = [...number];
  let arr = [];
  let num = number.shift();
  arr.push(num);
  console.log(arr);
  while (k > 0) {
    num = number.shift();
    if (arr[arr.length - 1] >= num) {
      arr.push(num);
    } else if (arr[arr.length - 1] < num) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < num) {
          arr.pop();
          k--;
          if (k === 0) break;
        }
      }
      arr.push(num);
    }
  }
  arr = arr.concat(number);
  console.log(arr);
  return arr.join('');
}

function solution2(number, k) {
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] < number[i]) {
        if (k === 0) break;
        arr.pop();
        k--;
      }
    }
    arr.push(number[i]);
  }
  return arr.join('');
}

function solution3(number, k) {
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    console.log('index:', i, 'k:', k);
    if (arr[arr.length - 1] < number[i]) {
      while (k > 0) {
        arr.pop();
        k--;
      }
    }
    arr.push(number[i]);
    // console.log('array:', arr, 'k:', k);
  }
  console.log(arr);
  return arr.join('');
}

function solution4(number, k) {
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    while (k > 0 && arr[arr.length - 1] < num) {
      arr.pop();
      k--;
    }
    arr.push(num);
  }
  console.log(k);
  if (k > 0) {
    // arr = arr.slice(0, k);
    console.log('true', arr);
    arr.splice(arr.length - k, k);
    return arr.join('');
  }
  console.log('false', arr);
  return arr.join('');
}
console.time('loop time');
// solution4('1924', 2); // '94'
// solution4('1231234', 3); // '3234'
// solution('4177252841', 4); // "775841"
solution4('322332', 3); // "99" // solution1 stackoverflow

console.timeEnd('loop time');

/**
 * 풀이(solution4가 정답)
 *
 * solution3이 정답과 거의 유사했지만.. 사실상 대실패
 * 반복문(while)의 조건식 설정 실패
 *
 * 사람들 풀이 다시한번 보기
 */
