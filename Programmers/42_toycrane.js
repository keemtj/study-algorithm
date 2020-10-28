/**
 * 크레인 인형뽑기 게임 (2019 KAKAO 개발자 겨울 인턴십)
 * board: 2차원 배열, 각 원소는 1~100까지의 숫자, 같은 숫자는 같은 모양의 인형
 * moves: 배열의 원소들은 크레인의 위치
 * stack: 옮긴 인형이 쌓이는 곳, 같은 인형 2개가 연속으로 쌓이면 사라진다
 * 사라진 인형의 갯수를 리턴
 */

/**
 * 풀이
 * 1. moves의 요소값 - 1: board의 세로라인
 * 2. 인형pickup: 0이 아닌 가장 처음 값을 선택(가장 위에 있는 인형)
 * 2-1. 선택된 값은 board배열에서 0으로 치환
 * 3. stack에 인형 push
 */
function pickup(board, move) {
  // move: 0 ~ 4(크레인 위치)
  for (let i = 0; i < board.length; i++) {
    if (board[i][move] !== 0) {
      const doll = board[i][move];
      console.log('picked it up', doll);
      board[i][move] = 0;
      return doll;
    }
  }
}

function solution(board, moves) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    const doll = pickup(board, moves[i] - 1);
    if (!doll) continue;
    if (stack[stack.length - 1] !== doll) {
      stack.push(doll);
      console.log('stack', stack);
    } else {
      stack.pop();
      result += 2;
      console.log('stack', stack);
      console.log('result', result);
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
