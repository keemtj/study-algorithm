/**
 * H-index
 * (정렬)
 * 과학자의 생산성과 영향력을 나타내는 지표
 * 어느 과학자의 H_index를 나타내는 값인 h를 구하려고한다
 *
 * 어떤 과학자가 발표한 논문 n편, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용
 * h의 최댓값이 이 과학자의 h-index
 * 논문인용횟수를 담은 배열 citations 일때 h를 리턴
 */

function solution(citations) {
  const n = citations.length;
  let min = Math.min(...citations);
  if (n === 1) {
    const thesis = min ? 1 : 0;
    console.log('논문을 1편 발표했을 때 1번이상 인용된 논문', a);
    return thesis;
  }
  if (min === n) {
    console.log(min);
    return n;
  }
  while (min <= n) {
    const thesis = citations.filter(v => (v >= min ? v : false)).length;
    console.log('인용횟수min:', min, 'min번 이상 인용된 논문', thesis);
    if (min > thesis) {
      min--;
      break;
    }
    min++;
  }
  console.log(min);
  return min;
}

// solution([3, 0, 6, 3, 5]); // 3
// solution([0, 0, 0, 0, 0]);
// solution([1, 1, 1, 1, 1]);
// solution([2, 2, 2, 2, 2]);
// solution([3, 3, 3, 3, 3]);
// solution([4, 4, 4, 4, 4]);
solution([22, 42]);
// solution([0]);
// solution([1]);
// solution([2]);
// solution([3]);
// solution([4]);
// solution([5]);
