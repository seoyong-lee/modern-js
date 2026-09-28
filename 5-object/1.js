let myVoca = {
    function: '함수',
    variable: '변수',
    constant: '상수'
};

// 레벨 1: 속성 다루기
// TODO: 'object'(객체), 'array'(배열) 추가
// TODO: 'constant' 삭제
// TODO: for...in으로 모든 단어 출력 → function: 함수 ...

// 레벨 2: 메서드 만들기
// TODO: myVoca에 아래 두 메서드 추가
//   addWord(key, value) — 단어 추가
//   printWord(key)      — '단어: 뜻' 출력, 없으면 '없는 단어입니다'
myVoca.addWord('loop', '반복문');
myVoca.printWord('loop');     // loop: 반복문
myVoca.printWord('class');    // 없는 단어입니다

// 레벨 3: 투표 집계하기 (대괄호 표기법)
let votes = ['김철수', '김철수', '이영희', '이영희', '이영희', '김철수', '이영희'];
let votesCounter = {};
// TODO: 후보 이름을 키로, 득표수를 값으로 (for...of + votesCounter[name])
console.log(votesCounter);  // { '김철수': 3, '이영희': 4 }
