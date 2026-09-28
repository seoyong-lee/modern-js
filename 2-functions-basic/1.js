// 레벨 1: 세트 메뉴 주문하기 (옵셔널 파라미터)
// 음료와 사이드를 생략하면 '콜라', '감자튀김'으로 주문
function orderSetMenu(burger, drink, side) {
    // TODO: 기본값을 지정하고 주문 내역을 return
}

console.log(orderSetMenu('불고기버거'));
// 불고기버거 + 콜라 + 감자튀김
console.log(orderSetMenu('새우버거', '사이다'));
// 새우버거 + 사이다 + 감자튀김

// 레벨 2: 함수 조합하기 (return 활용)
function getPrice(count, unitPrice) {
    // TODO: 총 금액 return
}

function getDiscountedPrice(price, rate) {
    // TODO: rate(%)만큼 할인한 금액 return
}

// getPrice의 결과를 getDiscountedPrice에 넘겨 출력
console.log(getDiscountedPrice(getPrice(3, 5000), 10));  // 13500
