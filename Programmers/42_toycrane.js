/**
 * 크레인 인형뽑기 게임 (2019 KAKAO 개발자 겨울 인턴십)
 * board: 2차원 배열, 각 원소는 1~100까지의 숫자, 같은 숫자는 같은 모양의 인형
 * moves: 배열의 원소들은 크레인의 위치
 * stack: 옮긴 인형이 쌓이는 곳, 같은 인형 2개가 연속으로 쌓이면 사라진다
 * 사라진 인형의 갯수를 리턴
 */

function solution(board, moves) {
  // 옮긴 인형이 쌓이는 스택
  let stack = [];
  // 크레인이 움직일 수 있는 횟수
  for (let i = 0; i < moves.length; i++) {}
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
