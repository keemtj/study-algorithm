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
  // const request = priorities[location];
  // const index = priorities.indexOf(request);
  priorities = priorities.map((v, i) => {
    return { value: v, request: i === location };
  });

  let order = [];

  while (priorities.length) {
    let J = priorities.shift();
    let hasPriority = priorities.some(v => v.value > J.value);
    if (hasPriority) {
      priorities.push(J);
    } else {
      order.push(J);
    }
  }

  const answer = order.indexOf(order.find(v => v.request)) + 1;
  return answer;
}

solution([2, 1, 3, 2], 2); // 1
solution([2, 2, 2, 2], 3); // 4

/**
 * 풀이
 * 
 * 처음에 문제 자체를 이해를 못하고 있다가.. 생각보다 친절하게 1,2,3번 순서대로 하면 된다는걸 문제를 여러번 읽고 깨달았다
 * const request = priorities[location];
 * const index = priorities.indexOf(request);
 * 초기에 설정한 이 변수 때문에 중복값에 대한 정확한 location을 찾지 못해서 계속 테스트 케이스를 헤매다가
 * console.log로 계속적인 디버깅을 하면서 알게되었다..
 * indexOf는 첫번째 값의 인덱스만 가져온다는것을 알고 아래의 로직을 수정해주었다
 * 처음에는 for문이었으나 map메소드로 로직을 간단하게 했다
 * priorities = priorities.map((v, i) => {
    // return { value: v, request: i === index };
    return { value: v, request: i === location };
  });
 * 
 * 큐/스택, indexOf, map, some 
 */
