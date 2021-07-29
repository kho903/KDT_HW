// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amout){
    // 현재 비교군을 amount로 설정
    let cur = amount;
    let res = null;
    for (let item of data){
        console.log(item.price);
        // 예산보다 가격이 비싼 것은 제외
        // 예산안에서 가장 비싼 것을 선택해야하므로 예산과 아이템의 가격의 차이가 가장 작은 것을 선택
        if (amount - item.price >= 0 & cur > amount - item.price) {
            // 현재 비교군을 예산과 현재 아이템의 가격의 차이로 설정
            cur = amount - item.price;
            res = item;
        }
    }
    return res;
}