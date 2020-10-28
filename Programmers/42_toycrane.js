/**
 * 크레인 인형뽑기 게임 (2019 KAKAO 개발자 겨울 인턴십)
 * board: 2차원 배열, 각 원소는 1~100까지의 숫자, 같은 숫자는 같은 모양의 인형
 * moves: 배열의 원소들은 크레인의 위치
 * stack: 옮긴 인형이 쌓이는 곳, 같은 인형 2개가 연속으로 쌓이면 사라진다
 * 사라진 인형의 갯수를 리턴
 */

function pickup(board, move) {
  console.log('move:', move);
  // 2. move 위치, 즉 크레인의 위치가 고정된 상태에서 가장 가까운 인형을 선택한다
  for (let i = 0; i < board.length; i++) {
    if (board[i][move] !== 0) {
      const doll = board[i][move];
      console.log('picked up:', doll);
      // 3. 인형을 집어 올리고 그 자리에 0을 채워 넣는다
      board[i][move] = 0;
      // 4. 조건문을 통해 처음 나온 값에 대하여 바로 return하기 때문에 반복문을 순회할 필요가 없다
      return doll;
    }
  }
  // 5. for문과 if조건문을 통해 리턴된 값이 없을 경우 pickup함수는 undefined를 리턴한다
  // 즉, move라인에 인형이 없는 경우를 뜻함
}

function solution(board, moves) {
  let stack = [];
  let result = 0;
  // 1. 크레인이 좌우로 움직일 수 있는 횟수만큼 반복문으로 순회
  for (let i = 0; i < moves.length; i++) {
    // 6. pickup된 인형이 stack에서 제거될 대상인지 아닌지 조건문에 따라 판별한다
    const doll = pickup(board, moves[i] - 1);
    if (!doll) continue;
    if (stack[stack.length - 1] !== doll) {
      stack.push(doll);
      console.log('stack:', stack);
    } else {
      stack.pop();
      result += 2;
      console.log('stack:', stack);
      console.log('result:', result);
    }
  }
  return result;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
); // 4

/**
 * 문제파악
 * 1. moves 배열의 요소값 - 1: board의 세로라인 = 크레인의 위치
 * 2. pickup함수: 0이 아닌 값을 선택(가장 위에 있는 인형을 선택)
 * 2-1. 선택된 값은 board배열에서 0으로 치환
 * 3. stack에 인형 push or pop
 *
 * 풀이
 * 1. 크레인이 좌우로 움직일 수 있는 횟수만큼 반복문으로 순회한다
 * 2. move 위치, 즉 크레인의 위치가 고정된 상태에서 가장 가까운 인형을 선택한다
 * 3. 인형을 집어 올리고 그 자리에 0을 채워 넣는다
 * 4. 조건문을 통해 처음 나온 값에 대하여 바로 return하기 때문에 반복문을 순회할 필요가 없다
 * 5. for문과 if조건문을 통해 리턴된 값이 없을 경우 pickup함수는 undefined를 리턴한다
 *    (즉, move라인에 인형이 없는 경우를 뜻함)
 * 6. pickup된 인형이 stack에서 제거될 대상인지 아닌지 조건문에 따라 판별한다
 */
