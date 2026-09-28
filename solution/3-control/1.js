// 레벨 1: 롤러코스터, 탈 수 있을까? (if)
function canRide(height, age) {
    if (height >= 140 && age >= 10) {
        console.log('탑승 가능');
    } else {
        console.log('탑승 불가');
    }
}
canRide(150, 12);   // 탑승 가능
canRide(135, 12);   // 탑승 불가

// 레벨 2: 등급별 티켓 가격 (switch)
function printTicketPrice(grade) {
    switch (grade) {
        case 'VIP':
            console.log('VIP석: 150000원');
            break;
        case 'R':
            console.log('R석: 120000원');
            break;
        case 'S':
            console.log('S석: 90000원');
            break;
        default:
            console.log('없는 등급입니다');
    }
}
printTicketPrice('R');   // R석: 120000원
printTicketPrice('A');   // 없는 등급입니다

// 레벨 3: 1부터 100까지 짝수의 합 (for)
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);   // 2550

// 레벨 4: 369 게임 (for + continue)
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log('짝!');
        continue;
    }
    console.log(i);
}
