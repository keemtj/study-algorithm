/**
 * ! 해결
 * 운동복
 * n: 전체 학생수 n
 * lost: 체육복을 도난당한 학생들의 번호가 담긴 배열
 * reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * return: 체육 수업을 들을 수 있는 학생의 최댓값
 * ! 바로 앞 번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다
 * ! 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수도 있다
 * ! 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며
 * ! 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없다
 */

function solution(n, lost, reserve) {
  // 체육복 2개 있는 학생 판별
  const rich = reserve.filter((_, i, arr) => lost.includes(arr[i]));
  console.log(rich.length);

  // 체육복 2개 본인꺼 해결하고 진짜 빌려줘야 되는 학생
  let poor = lost.filter((_, i, arr) => !rich.includes(arr[i]));
  console.log('poor', poor);
  // 체육복 2개 본인꺼 해결하고 진짜 빌려줄 수 있는 학생
  const rest = reserve.filter((_, i, arr) => !rich.includes(arr[i]));
  console.log(rest);
  // 이제는 진짜로 빌려줄 시간
  // rest로 해결이 가능한 poor 추려내기
  const rent = rest.filter(
    (r, i, arr) => poor.includes(arr[i] + 1) || poor.includes(arr[i] - 1),
  );
  console.log('rent', rent);
  // 이제 진짜 빌려줄거 다 빌려주고 수업참여 못하는 학생 추려내기
  // rent해줄수 있는 인원수에 맞게 poor에서 제외
  if (!rent.length) return n - poor.length;
  if (rent.length && poor.length <= rent.length) return n;
  if (rent.length && poor.length > rent.length)
    return n - poor.length + rent.length;
}

solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); //2
solution(3, [3], [3]); //2
solution(7, [2, 3, 4], [1, 2, 3, 6]); // 6
solution(7, [2, 3, 4, 5], [1, 2, 3, 6]); // 6
solution(5, [1, 2], [1, 2, 5]); // 5

/**
 * 풀이
 * 읽어버린 학생과 빌려줄수 있는 학생이 중복되는 경우 체크
 * Array.prototype.filter(): filter안에 있는 callback함수의 값이 true인 요소만 반환하여 새로운 배열을 return
 * Array.prototype.includes(): 배열이 특정 요소를 포함하고 있는 지 여부를 Boolean값으로 return
 */
