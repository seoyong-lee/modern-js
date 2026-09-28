// 과제 1: 장바구니 합계 (객체 배열 + for...of + if)
const cart = [
    { name: '키보드', price: 35000, count: 1 },
    { name: '마우스', price: 12000, count: 2 },
    { name: '마우스패드', price: 5000, count: 1 }
];
let total = 0;
for (let item of cart) {
    const amount = item.price * item.count;
    console.log(`${item.name} x ${item.count} = ${amount}원`);
    total += amount;
}
let shipping = 3000;
if (total >= 50000) {
    shipping = 0;
}
console.log(`상품 금액: ${total}원`);
console.log(`배송비: ${shipping}원`);
console.log(`결제 금액: ${total + shipping}원`);

// 과제 2: 로또 번호 뽑기 (Math.random + while + includes)
const lotto = [];
while (lotto.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!lotto.includes(num)) {
        lotto.push(num);
    }
}
console.log(lotto);  // 실행할 때마다 다름

// 과제 3: 단어 빈도수 세기 (split + 객체 + for...in)
const sentence = 'the cat and the dog and the bird';
const words = sentence.split(' ');
const count = {};
for (let word of words) {
    if (count[word]) {
        count[word] += 1;
    } else {
        count[word] = 1;
    }
}
for (let word in count) {
    console.log(`${word}: ${count[word]}`);
}
