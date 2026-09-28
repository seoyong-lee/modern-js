// 레벨 1: 운동 칼로리 계산기
function printCalories(kcalPerMin, minutes) {
    console.log(`${kcalPerMin * minutes}kcal를 소모했습니다.`);
}

printCalories(8, 30);   // 240kcal를 소모했습니다.

// 레벨 2: BMI 계산기 (return 사용)
function getBMI(weight, height) {
    return weight / (height * height);
}

console.log(getBMI(70, 1.75));  // 22.857142857142858

// 레벨 3: 1년 뒤 받을 금액
function getAmountAfterYear(principal, rate) {
    return principal + principal * rate / 100;
}

console.log(getAmountAfterYear(1000000, 3));  // 1030000
