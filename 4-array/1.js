// 레벨 1: 온도 바꾸기 — 섭씨를 화씨로 (F = C * 9 / 5 + 32)
let celsius = [13, 15, 17, 19, 21];
let fahrenheit = [];
// TODO: for...of로 변환해 fahrenheit에 push
console.log(fahrenheit);  // [55.4, 59, 62.6, 66.2, 69.8]

// 레벨 2: 가장 높은 기온 찾기
let temps = [13, 21, 17, 19, 15];
let max = temps[0];
// TODO: for...of로 최댓값을 찾고 indexOf로 며칠째인지 출력
// 가장 높은 기온은 21도, 2번째 날입니다.

// 레벨 3: 팀 나누기 — 앞에서부터 번갈아 A팀 · B팀 (2차원 배열)
let players = ['a', 'b', 'c', 'd', 'e', 'f'];
let teams = [[], []];
// TODO: 인덱스가 짝수면 teams[0], 홀수면 teams[1]
console.log(teams);  // [ [ 'a', 'c', 'e' ], [ 'b', 'd', 'f' ] ]
