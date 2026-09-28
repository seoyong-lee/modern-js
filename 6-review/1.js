// 과제 1: 장바구니 합계 (객체 배열 + for...of + if)
const cart = [
    { name: '키보드', price: 35000, count: 1 },
    { name: '마우스', price: 12000, count: 2 },
    { name: '마우스패드', price: 5000, count: 1 }
];
// TODO: 상품마다 '이름 x 수량 = 금액원' 출력
// TODO: 상품 금액이 50000원 이상이면 배송비 0원, 아니면 3000원
// 키보드 x 1 = 35000원
// 마우스 x 2 = 24000원
// 마우스패드 x 1 = 5000원
// 상품 금액: 64000원
// 배송비: 0원
// 결제 금액: 64000원

// 과제 2: 로또 번호 뽑기 (Math.random + while + includes)
const lotto = [];
// TODO: 1~45 사이 정수를 뽑아 lotto에 없을 때만 push, 6개가 될 때까지 반복
console.log(lotto);  // 예: [ 30, 11, 43, 20, 21, 18 ] (실행할 때마다 다름)

// 과제 3: 단어 빈도수 세기 (split + 객체 + for...in)
const sentence = 'the cat and the dog and the bird';
// TODO: split(' ')으로 단어 배열을 만들고 단어를 키로 개수 세기
// TODO: for...in으로 '단어: 개수' 출력
// the: 3
// cat: 1
// and: 2
// dog: 1
// bird: 1
