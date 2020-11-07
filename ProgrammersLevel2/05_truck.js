/**
 * 다리를 지나는 트럭
 * 일차선 다리를 정해진 순으로 트럭이 건너야 한다
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 한다
 * 트럭은 1초에 1만큼 움직인다. 다리 길이는 bridge_length이고 무게는 weight까지 견딘다
 * 트럭이 다리에 완전히 오르지 않은경우, 이 트럭의 무게는 고려하지 않는다
 *
 * 경과 시간 1초마다 트럭을 하나씩 꺼내는데 이때 먼저 꺼낸 트럭과 다음 트럭의 무게가 다리 무게를 초과하면 대기하고 경과시간을 1초씩 늘려
 * 경과시간이 다리 길이를 지나면 상관없이 다시 다음 트럭을 꺼냄
 */

/**
 * * time: elapsed time
 * * bridge_state: trucks passing the bridge
 * * bridge_weight: sum of truck weight
 * * truck = waiting truck
 */

function solution(bridge_length, weight, truck_weights) {
  let time = 1;
  let bridge_state = Array.from({ length: bridge_length }, () => 0);
  let bridge_weight = 0;
  let truck = truck_weights.shift();

  bridge_state.unshift(truck);
  bridge_state.pop();
  bridge_weight += truck;

  while (bridge_weight) {
    bridge_weight -= bridge_state.pop();
    truck = truck_weights.shift();
    if (bridge_weight + truck <= weight) {
      bridge_state.unshift(truck);
      bridge_weight += truck;
    } else {
      bridge_state.unshift(0);
      truck = truck_weights.unshift(truck);
    }
    time += 1;
  }
  return time;
}

solution(2, 10, [7, 4, 5, 6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 110

/**
 * 풀이
 * 스택/큐
 * 주어진 truck_weights 큐와 bridge_state 큐 2개를 이용한 문제이다
 * 배열 메소드 pop(), shift(), unshift(), push()의 개념을 확실하게 잡을 필요가 있다
 * !주의: 원본배열을 직접 변경한다
 *
 * 처음
 * bridge_state배열의 길이를 bridge_length와 일치시키고 배열의 값을 0으로 할당한다
 * truck_weights에서 첫번째 트럭을 추출해 bridge_state에 넣는다
 * 트럭이 다리위로 올라간 순간 time은 증가한다
 *
 * 반복
 * 트럭이 다리가 견딜 수 있는 중량 조건만 만족한다면 다리위로 쉬지않고 올라가야한다
 * (즉, 다리의 무게는 계속적으로 증가하거나 감소하는 등 변화가 생긴다(트럭이 있는 한 0은 될 수 없다))
 *
 * 다리위에 있는 트럭들의 위치를 한칸씩 이동시킨다
 * (다리에서 제일 마지막에 있는 값을 추출하고, 현재 다리 중량을 감소시킨다)
 * 그다음에 들어가야하는 트럭을 truck_weights큐에서 추출한다
 *
 * 조건1
 * 다리가 견딜 수 있는 중량 조건이 true일 경우,
 * truck_weights 큐에서 추출한 값을 다리위로 넣는다
 * 이때 현재 다리의 무게를 증가시킨다
 *
 * 조건2
 * 다리가 견딜 수 있는 중량 조건이 false일 경우,
 * truck_weights의 원본 배열이 반복문의 처음 조건에서 훼손되었기 때문에 다시 원래의 배열로 돌려놓는다
 *
 * 반복
 * 반복문의 순회 과정이 시간의 증가와 같으므로 다시 처음으로 순회하기전 마지막 줄에서 time값을 1씩 증가시킨다
 */
