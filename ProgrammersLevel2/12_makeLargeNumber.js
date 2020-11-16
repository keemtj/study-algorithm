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
  const num = number.shift();
  arr.push(num);

  while (number.length > 0) {
    const num = number.shift();
    console.log(arr[arr.length - 1], num, arr, k);
    if (arr[arr.length - 1] < num) {
      console.log('true동작');
      arr.pop();
      arr.push(num);
      k--;
    } else {
      console.log('false동작');
      arr.push(num);
    }
  }
  arr[0] < arr[1] && arr.shift();
  return arr.join('');
}

solution('1924', 2); // '94'
solution('4177252841', 4); // return "775841"

/**
 * arr   < number
 * ""(0) < 1      -> true   -> arr.pop(), arr.push(num) -> (처음에는 k 그대로)
 * 1     < 9      -> true   -> arr.pop(), arr.push(num) -> k--
 * 9     > 2      -> false  -> arr.push(num)
 * 2     < 4      -> true   -> arr.pop(), arr.push(num) -> k--
 *
 * 위 방법봗 더 까다로운 조건 필요...아이패드에 흐름 그려보기
 */
