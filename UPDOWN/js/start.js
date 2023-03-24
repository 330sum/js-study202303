import gameData from "./gameData.js";
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js";



// 정의부
export default function gameStart(iconCount) {

    // 구슬을 iconCount개 만들어야 함.

    const $numbers = document.getElementById('numbers');

    // 구슬 만드는 함수
    const makeIcon = () => {

        for (let n = 1; n <= iconCount; n++) {
            // <div class='icon'>1</div>
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            // 텍스트컨텐트가 아니였다면 이때 데이터속성을 쓰는 것이 좋음
            $icon.dataset.iconNumber = n;
            $numbers.appendChild($icon);
        }
    };
    makeIcon();



    // 아이콘에 클릭 이벤트 부여하기
    // 아이콘 각 개별한테 주는 것보다 부모한테 주기(버블링효과)
    $numbers.onclick = e => {
        if (!e.target.matches('#numbers .icon')) return;
        // console.log(`${e.target.textContent}구슬 클릭함!`);
        // console.log(`${e.target.dataset.iconNumber}구슬 클릭함!`);


        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        // console.log(gameData); // 꼭 콘솔로 확인해보기, 그러면 문자열로 적히는거 확인할 수 있음! 그래서 +넣어서 숫자로 바꿔주기 
        console.log(gameData.secret); // 정답은 보면서 해보자 ㅋㅋ

        // 정답 검증 함수
        checkNumber(e.target);


    };
}






// 정답을 검증하는 함수
function checkNumber($target) {

    // 딕스트럭처링
    const {
        secret,
        answer
    } = gameData;

    // 실제정답이랑 선택값을 비교
    if (secret === answer) { // 정답인 경우
        // console.log('정답!');
        correctAnswer($target);

    } else if (secret > answer) { // up인 경우
        // console.log('업!');
        caseUp($target);

    } else { // down인 경우
        // console.log('다운!');
        caseDown($target);
    }
}





// export default gameStart;
// 이렇게 써도되고, function 앞에다가 써도 됨 - 7번라인