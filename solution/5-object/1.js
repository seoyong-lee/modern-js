let myVoca = {
    function: '함수',
    variable: '변수',
    constant: '상수'
};

// 레벨 1: 속성 다루기
myVoca.object = '객체';
myVoca.array = '배열';
delete myVoca.constant;
for (let key in myVoca) {
    console.log(`${key}: ${myVoca[key]}`);
}

// 레벨 2: 메서드 만들기
myVoca.addWord = function (key, value) {
    myVoca[key] = value;
};
myVoca.printWord = function (key) {
    if (key in myVoca) {
        console.log(`${key}: ${myVoca[key]}`);
    } else {
        console.log('없는 단어입니다');
    }
};
myVoca.addWord('loop', '반복문');
myVoca.printWord('loop');     // loop: 반복문
myVoca.printWord('class');    // 없는 단어입니다

// 레벨 3: 투표 집계하기 (대괄호 표기법)
let votes = ['김철수', '김철수', '이영희', '이영희', '이영희', '김철수', '이영희'];
let votesCounter = {};
for (let name of votes) {
    if (name in votesCounter) {
        votesCounter[name] += 1;
    } else {
        votesCounter[name] = 1;
    }
}
console.log(votesCounter);  // { '김철수': 3, '이영희': 4 }
