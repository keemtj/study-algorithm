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
 * * passing: trucks passing the bridge
 * * bridge_weight: sum of truck weight
 */

function solution(bridge_length, weight, truck_weights) {
  let time = 1;
  let passing = Array.from({ length: bridge_length }, () => 0);
  let bridge_weight = 0;
  passing[0] = truck_weights.shift();
  bridge_weight = passing.reduce((a, b) => a + b, 0);
  console.log('다리 위 상태:', passing);
  console.log('다리 위 무게:', bridge_weight);
  console.log('대기 중 트럭:', truck_weights[0]);
  console.log('------------------------------');

  while (time < 10) {
    if (bridge_weight + truck_weights[0] > weight) {
      if (passing.length > bridge_length) {
        passing.unshift(truck_weights.shift());
        passing.pop();
        time += 1;
      }
      passing.unshift(0);
      time += 1;
      console.log('다리 위 상태:', passing);
    }
    // else if (bridge_weight + truck_weights[0] <= weight) {
    //   passing.push(truck_weights.shift());
    //   passing.pop();
    //   console.log('다리 위 상태:', passing);
    //   console.log('다리 위 무게:', bridge_weight);
    //   console.log('대기 중 트럭:', truck_weights[0]);
    // }
  }
}

solution(2, 10, [7, 4, 5, 6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 110
