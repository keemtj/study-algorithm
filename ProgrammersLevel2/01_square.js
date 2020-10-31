/**
 * 멀쩡한 사각형 (Summer/Winter Coding, 2019)
 * 가로: Wcm, 세로: Hcm인 직사각형, 격자 1cm x 1cm
 * 대각선으로 자른 2개의 직각삼각형에서 나올 수 있는 멀쩡한 정사각형의 개수를 리턴
 */

function solution(W, H) {
  const total = W * H;
  const gcd = (W, H) => (W % H === 0 ? H : gcd(H, W % H));
  const unuseful = W + H - gcd(W, H);
  const answer = total - unuseful;
  console.log(answer, gcd(W, H));
  return answer;
}

solution(1, 4);

/**
 * 풀이
 * 1. 기울기와 좌표의 비교..?
 * 2. 8, 12 -> 2 x 4, 3 x 4?
 * 3. 최대공약수?
 * 4. 규칙찾기 실패
 *
 * 대각선이 지나가는 단위 정사각형의 개수를 구하는 수학적인 공식이 존재
 * W + H - (W, H의 최대공약수)
 * W * H사각형에서 W와 H의 최대공약수가 a라고 할 때
 * W = ab
 * H = ac
 * a = gcd, b, c는 서로소
 * W * H = a^2 * bc -> a^2개의 사각형으로 분할 가능, 대각선이 지나는
 * bc사각형은 a개, bc사각형에서 대각선이 지나가는 단위사각형은 b + c - 1개
 * W * H 사각형 전체적으로 보면
 * a(b + C - 1) = ab + ac - a = W * H - gcd
 */
/**
 * 2*3(서로소)
 * oxx -> oox -> 가로길이 + 세로길이 - 1
 * xxo -> xxx
 */
