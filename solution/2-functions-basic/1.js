// 레벨 1: 세트 메뉴 주문하기 (옵셔널 파라미터)
function orderSetMenu(burger, drink = '콜라', side = '감자튀김') {
    return `${burger} + ${drink} + ${side}`;
}

console.log(orderSetMenu('불고기버거'));
// 불고기버거 + 콜라 + 감자튀김
console.log(orderSetMenu('새우버거', '사이다'));
// 새우버거 + 사이다 + 감자튀김

// 레벨 2: 함수 조합하기 (return 활용)
function getPrice(count, unitPrice) {
    return count * unitPrice;
}

function getDiscountedPrice(price, rate) {
    return price - price * rate / 100;
}

console.log(getDiscountedPrice(getPrice(3, 5000), 10));  // 13500
