/**
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
  const myself = reserve.filter((_, i, arr) => lost.includes(arr[i]));
  lost = lost.filter((l, i) => l !== myself[i]);
  reserve = reserve.filter((_, i, arr) => !myself.includes(arr[i]));
  reserve = reserve.filter((r, i, arr) => {
    if (lost.includes(arr[i] + 1) || lost.includes(arr[i] - 1)) return r;
  });
  console.log(n, lost.length, reserve.length);
  return lost.length <= reserve.length ? n : n - lost.length + reserve.length;
}

solution(7, [2, 3, 4], [1, 2, 3, 6]); // 6
solution(5, [2, 4], [1, 3, 5]); // 5
