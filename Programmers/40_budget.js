/**
 * 예산
 * Summer/Winter Coding(~2018)
 * 부서별로 신청한 금액d, 예산 budget일때 최대 몇개 부서에 물품을 지원할 수 있는가
 * 1. 전체예산은 정해져 있다
 * 2. 정해진 예산으로 모든 부서의 물품을 구매해 줄 수 없다
 * 3. 최대한 많은 부서의 물품을 구매해 주도록 하려고 한다
 * 4. 각 부서가 시니청한 금액만큼 모두 지원해준다
 * 5. 신청한 금액보다 적은 금액을 지원해줄 수는 없다
 */

function solution(d, budget) {
  const asc = d.sort((a, b) => a - b);
  let leastBudget = budget;
  const answer = asc.filter(v => {
    leastBudget -= v;
    return leastBudget >= 0;
  }).length;
  return answer;
}

solution([1, 3, 2, 5, 4], 9); // 3(최대 3개의 부서에 물품지원이 가능)

/**
 * 풀이
 * 최대한 많은 부서가 물품을 구매하려면 예산이 가장 적은 부서부터 차례로 전체 예산에서 분배해야 한다
 * 1. Array.prototype.sort(): 오름차순 정렬을 통해 가장 예산이 적은 부서부터 나열한다;
 * 2. Array.prototype.filter(): 콜백함수의 조건이 true인, 즉 예산을 받을 수 있는 부서만 filtering하여 리턴한다
 * 3. filter 메소드를 통해 새로 반환된 배열의 길이(length), 즉 부서의 개수를 구한다
 */
