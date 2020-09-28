/**
 * ! 해결
 * 2016년
 * 2016년 1월 1일은 금요일 -> 2016년 a월 b일은 무슨 요일인가?
 * day = [SUN, MON, TUE, WED, THU, FRI, SAT];
 * 1. 2016년은 윤년이다 (366일);
 * 2. a월 b일은 실제 존재하는 날이다(13월 26일, 2월 45일같은 날짜는 없음)
 */

function solution(a, b) {
  const date = new Date(`2016/${a}/${b}`);
  const answer = date
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toUpperCase();
  return answer;
}

solution(1, 1);
solution(2, 29);
solution(5, 24); // 'TUE'

/**
 * 풀이
 * 1. new Date 객체 생성
 * 2. toLocaleDateString(): weekday 추출
 * 3. toUpperCase(): 문자열을 대문자로 변경
 * ! 알고리즘 문제인데 new Date객체를 쓰는것이 맞는 건지 의문이 드는 문제
 * ! 다른 풀이가 필요할 듯 하다
 */
