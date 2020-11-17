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

console.time('loop time');
// solution('1924', 2); // '94'
solution('4177252841', 4); // return "775841"
console.timeEnd('loop time');

/**
 * arr   < number
 * ""(0) < 1      -> true   -> arr.pop(), arr.push(num) -> (처음에는 k 그대로)
 * 1     < 9      -> true   -> arr.pop(), arr.push(num) -> k--
 * 9     > 2      -> false  -> arr.push(num)
 * 2     < 4      -> true   -> arr.pop(), arr.push(num) -> k--
 *
 * 위 방법봗 더 까다로운 조건 필요...아이패드에 흐름 그려보기
 */
