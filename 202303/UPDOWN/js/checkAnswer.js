function caseUp($icon) {
    // 1. (html 29라인에 있는) #begin의 숫자값이 클릭값 +1로 변경
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1;

    // 2. (html 38번 라인, css 125번라인 jumping) #down .selected 제거, #up에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');

    // 3. 자기 자신 아이콘포함 이전형제들 모두 삭제
    // 부모태그.removeChild(나의태그);
    // 부모태그.removeChild(나의이전형제);
    // 부모태그.removeChild(나의이전형제이전형제);
    const $numbers = document.getElementById('numbers');
    // $numbers.removeChild($icon);
    // $numbers.removeChild($icon.previousElementSibling);


    // iterator 디자인 패턴 (null이 나올때까지 반복)
    // 제거할 애 사형대에 세우기
    let $delTarget = $icon;
    // while ($delTarget !== null) { // 죽을애가 null이 아닐때까지
    while ($delTarget) { // 죽을애가 있으면 true, 없으면 false

        // $numbers.removeChild($delTarget);
        // $delTarget = $delTarget.previousElementSibling;
        // 112번~113번 위에 코드처럼 쓰면 안됨. 왜? 내가 이미 제거되서 죽일형이 없음.
        // 그렇다고 113번라인을 위에다가 쓰냐? 그러면 내가 안죽음
        // 그래서 아래꺼 꼭 쓰기

        const $nextTarget = $delTarget.previousElementSibling; // 내가 죽기 전에 유언남기기
        $numbers.removeChild($delTarget); // 나 죽고
        $delTarget = $nextTarget; // 내가 죽기전에 말했던 nextTarget을 delTarget에 대입

    }
}




function caseDown($icon) {

    // 1. #end의 숫자값이 클릭값 - 1로 변경
    document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;

    // 2. #up .selected 제거, #down에 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');

    // 3. 자기 자신 아이콘포함 다음형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $icon;
    while ($delTarget) {

        const $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }

}














function correctAnswer($correctIcon) {
    // 1. finish아디 박스에 class 'show' 부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    // 2. #numbers 클릭 이벤트 해제 (게임끝나면 숫자구슬 클릭못하게)
    document.getElementById('numbers').onclick = null;

    // 3. 클릭한 아이콘에 id 'move' 부여
    // 클릭한정답아이콘.setAttribute('id', 'move');
    $correctIcon.setAttribute('id', 'move');
}





export { caseUp, caseDown, correctAnswer };