function start() {

    // 이름 배열
    const nameList = ['구빛나', '권상지', '김영수',
        '김지승', '김태근', '김혜영', '박수민',
        '송유근', '신지송', '원석빈', '윤영식',
        '이기덕', '이동우', '이민정', '이상욱',
        '이재필', '이진수', '이진호',
        '이채원', '정동관', '조경훈', '조상천',
        '조성훈', '조예원', '채지원', '최예진',
        '최재경', '한세진', '홍성준'
    ];

    let teamNo = 1;

    // 팀원 정보 배열
    const teams = [];

    // 팀원 수 배열
    const teamNumbers = [3, 3, 3, 3, 3, 3, 3, 4, 4];

    
    // 팀원 랜덤 생성 함수
    const makeTeam = numOfPerson => {

        const teamList = [];
    
        for (let i = 0; i < numOfPerson; i++) {
            const randomIndex = Math.floor(Math.random() * nameList.length);
            const select = nameList[randomIndex];
            teamList.push(select);
            nameList.splice(randomIndex, 1);
        }
    
    
        teams.push({
            teamNo: teamNo++,
            teamList: teamList
        });
    
    };

    // 팀원 정보 출력함수
    const printTeamInfo = () => {

        teams.forEach(({
            teamNo,
            teamList
        }) => {
            console.log(`${teamNo}조 : [${teamList}]`);
        });
    };

    

    teamNumbers.forEach(n => {
        makeTeam(n);
    });


    printTeamInfo();

}





//============[ execute ]=============//
(() => {
    start();
})();