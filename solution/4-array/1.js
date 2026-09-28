// 레벨 1: 온도 바꾸기 — 섭씨를 화씨로 (F = C * 9 / 5 + 32)
let celsius = [13, 15, 17, 19, 21];
let fahrenheit = [];
for (let c of celsius) {
    fahrenheit.push(c * 9 / 5 + 32);
}
console.log(fahrenheit);  // [55.4, 59, 62.6, 66.2, 69.8]

// 레벨 2: 가장 높은 기온 찾기
let temps = [13, 21, 17, 19, 15];
let max = temps[0];
for (let t of temps) {
    if (t > max) {
        max = t;
    }
}
console.log(`가장 높은 기온은 ${max}도, ${temps.indexOf(max) + 1}번째 날입니다.`);

// 레벨 3: 팀 나누기 — 앞에서부터 번갈아 A팀 · B팀 (2차원 배열)
let players = ['a', 'b', 'c', 'd', 'e', 'f'];
let teams = [[], []];
for (let i = 0; i < players.length; i++) {
    if (i % 2 === 0) {
        teams[0].push(players[i]);
    } else {
        teams[1].push(players[i]);
    }
}
console.log(teams);  // [ [ 'a', 'c', 'e' ], [ 'b', 'd', 'f' ] ]
