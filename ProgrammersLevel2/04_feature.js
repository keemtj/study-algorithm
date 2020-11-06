/**
 * 기능개발
 * 각 기능은 진도가 100%일 때 서비스에 반영할 수 있다
 * 각 기능의 개발 속도는 다르기 따문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고
 * 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다
 * 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses
 * 각 작업의 개발 속도가 적힌 정수 배열 speeds
 * 각 배포마다 몇 개의 기능이 배포되는지를 return
 *
 * 작업 진도(자연수), 작업 속도(자연수), 배포는 하루에 한번만 가능
 * 하루의 끝에 이루어진다고 가정
 * 진도율 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어 짐
 */

function recursive(progress, speed, date) {
  if (progress >= 100) {
    return date;
  } else {
    date += 1;
    progress += speed;
    // recursive(progress, speed, date);
    return recursive(progress, speed, date);
  }
}

function solution(progresses, speeds) {
  const dates = [];
  for (let i = 0; i < progresses.length; i++) {
    dates.push(recursive(progresses[i], speeds[i], 0));
  }

  let answer = [];
  let count = 1;
  let temp = dates[0];
  for (let i = 0; i < dates.length; i++) {
    if (temp >= dates[i + 1]) {
      count += 1;
    } else {
      temp = dates[i + 1];
      answer.push(count);
      count = 1;
    }
  }
  console.log(answer);
  return answer;
}

solution([93, 30, 55], [1, 30, 5]); // [2, 1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]

/**
 * else에서 return recursive를 해주셔야졍
 * 함수가 호출되는 스콥이 다르니까 마지막에서의 return date는 실제로 저 함수를 호출한 레퍼런스에서 리턴되지 않아영
 *
 * 풀이
 * 1. progresses가 작업을 완료하기까지 걸리는 시간을 recursive 함수를 통해 리턴
 * 2. dates 배열에서 서로 날짜를 비교하여
 * 2-1. prev값이 next값보다 크거나 같으면 카운트
 * 2-2. prev값이 next값보다 작으면 비교 기준이 되는 날짜를 새로 재할당, counted값 push, count 초기화
 */
