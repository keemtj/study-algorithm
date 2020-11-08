/**
 * 프린터 (스택/큐)
 * 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄되기 떄문에, 중요한 문서가 나중에 인쇄될 수 있다
 * 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발
 *
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다
 * 3. 그렇지 않으면 J를 인쇄합니다
 *
 * 인쇄물: A, B, C, D
 * 중요도: 2, 1, 3, 2 (1~9, 숫자가 클수록 중요)
 * 인쇄순: C, D, A, B
 * location: 2
 *
 * C는 1번, A는 3번째로 인쇄
 *
 * priorities: 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열
 * location: 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지 알려주는 매개변수
 * (0~대기목록에 있는 작업수 - 1)
 * 내가 인쇄를 요청한 문서가 몇번째 인쇄되는지 return
 */

function solution(priorities, location) {
  const request = priorities[location]; // 요청 문서
  console.log(request, location);
  for (let i = 0; i < priorities.length; i++) {
    priorities[i] = {
      value: priorities[i],
      request: i === location,
    };
  }
  console.log(priorities);

  let order = [];

  while (priorities.length) {
    let J = priorities.shift();
    // console.log('**** J:', J);
    if (priorities.some(v => v.value > J.value)) {
      priorities.push(J);
      // console.log('true?', priorities, order);
    } else {
      order.push(J);
      // console.log('false?', priorities, order);
    }
  }
  console.log(order);
  const answer = order.indexOf(order.find(v => v.request)) + 1;
  console.log(answer);
  return answer;
}

solution([2, 1, 3, 2], 2); // 1
// solution([2, 2, 2, 2], 3);
