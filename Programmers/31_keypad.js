/**
 * 2020 카카오인턴십
 * 키패드 누르기
 * 1. 왼손과 오른손의 엄지만을 이용하여 숫자만을 입력
 * 2. 왼손은 *, 오른손은 # 위치에서 시작
 * ! 규칙
 * 1. 엄지손가락은 상하좌우 4가지 방향으로만 이동, 키패드 이동 한 칸은 거리 1에 해당
 * 2. 왼쪽 열의 3개 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용
 * 3. 오른쪽 열의 3개 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용
 * 4. 가운데 열의 4개 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용
 * 5. 만약 두 엄지손가락의 거리가 같다면 오른손잡이는 오른손 엄지, 왼손잡이는 왼손 엄지를 사용
 * ! 반환값
 * 각 번호를 누른 엄지손가락이 왼손인지 오른손인지를 나타내는 연속된 문자열 형태로 리턴('L', 'R')
 * ex) "LLRRLRLRL"
 */

function calcDistance(num, leftPos, rightPos, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  // 왼손 거리
  const leftDistance =
    Math.abs(keypad[num][0] - keypad[leftPos][0]) +
    Math.abs(keypad[num][1] - keypad[leftPos][1]);
  // 오른손 거리
  const rightDistance =
    Math.abs(keypad[num][0] - keypad[rightPos][0]) +
    Math.abs(keypad[num][1] - keypad[rightPos][1]);
  if (leftDistance > rightDistance) return 'R';
  if (leftDistance < rightDistance) return 'L';
  if (leftDistance === rightDistance) return hand[0].toUpperCase();
}

function solution(numbers, hand) {
  let leftPos = '*';
  let rightPos = '#';
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 3 === 1) {
      answer.push('L');
      leftPos = num;
    } else if (num % 3 === 0 && num !== 0) {
      answer.push('R');
      rightPos = num;
    } else {
      answer.push(calcDistance(num, leftPos, rightPos, hand));
      calcDistance(num, leftPos, rightPos, hand) === 'R'
        ? (rightPos = num)
        : (leftPos = num);
    }
  }
  return answer.join('');
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // "LRLLLRLLRRL"

/**
 * 핵심
 * 1. keypad를 좌표공간으로 생각한다
 * 2. 현재 누르고 있는 number를 어떤 손가락이 입력하고 있는지 업데이트 해준다
 * 3. 업데이트된 숫자의 위치와 눌러야할 숫자의 위치간의 거리를 계산한다
 *
 * 풀이
 * 1. keypad의 번호를 좌표로 설정한다
 * 2. solution함수에서 왼쪽 열과 오른쪽 열의 경우 무조건 'L', 'R'로 정해져 있으므로 조건에 따라 answer배열에 넣어준다
 * 3. 중앙 열의 경우 현재 입력받은 num과 왼쪽, 오른쪽 손가락의 위치(leftPos, rightPos)와의 거리에 따라 값이 정해진다
 * 4. 거리를 계산하는 함수 calcDistance를 선언하고, 가로(x축), 세로(y축)의 거리를 계산해 합산하여 왼손과 오른손의 각각의 거리를 비교하여 'L', 'R'을 리턴한다
 * 4-1. Math.abs(): 거리는 음수가 나올 수 없으므로 절대값을 이용한다.
 * 5. 리턴한 결과에 따라 오른쪽 손가락 위치 혹은 왼쪽 손가락 위치도 같이 업데이트해준다
 *
 * 정리
 * level 1수준의 알고리즘 문제들의 풀이 방법으로도 충분히 해결할 수 있는 문제이다.
 * 단지 level 1의 난이도처럼 느껴지지 않는건 요구되는 조건과 그 조건에 맞게 계산해야할 것들이 많기 때문이다.
 */
