/**
 * 괄호 변환
 * 2020 KAKAO BLIND RECRUITMENT
 *
 * 균형잡힌 괄호 문자열: '(' 와 ')' 로만 이루어진 문자열이 있을 경우, '(' 의 개수와 ')' 의 개수가 같음.
 * 올바른 괄호 문자열:  '('와 ')'의 괄호의 짝도 모두 맞을 경우
 * "(()))("은 균형잡힌 문자열이지만 올바른 문자열은 아니다
 * "(())()"은 균형잡힌 문자열이면서 올바른 문자열이다
 *
 * 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
 * 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
 *    ! 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
 *
 * 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
 *    3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
 * 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
 *    4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
 *    4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
 *    4-3. ')'를 다시 붙입니다.
 *    4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
 *    4-5. 생성된 문자열을 반환합니다.
 */

function uTrans(u) {
  u.shift();
  u.pop();
  return u.map(value => (value === '(' ? ')' : '(')).join('');
}

function isCorrect(u) {
  let isBalance = false;
  for (let i = 0; i < u.length; i++) {
    if (u[i] === '(' && u[u.length - 1] === ')') {
      return !isBalance;
    }
  }
  return isBalance;
}

function uvSplit(p) {
  p = [...p];
  let count = [0, 0];
  let u = '';
  let v = '';
  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? count[0]++ : count[1]++;
    if (count[0] === count[1]) {
      u = p.splice(0, i + 1).join('');
      v = p.join('');
      break;
    } else {
      u = p.join('');
      v = '';
    }
  }
  return { u, v };
}

function solution(p) {
  if (p === '') return p;
  let u = uvSplit(p).u;
  let v = uvSplit(p).v;

  let str = '';
  if (isCorrect([...u])) {
    v = solution(v);
    u += v;
    str = u;
    return str;
  } else {
    v = solution(v);
    str = '(' + v + ')' + uTrans([...u]);
    return str;
  }
}

solution('(()())()'); // "(()())()"
// solution(')('); // "()"
// solution('()))((()'); // "()(())()"

/**
 * 문제에서 시키는대로 코드 쓰면서 풀긴 풀었는데... 잘 모르겠다ㅜㅜ
 */
