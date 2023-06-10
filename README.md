### ajax 실습시 JSON Server 설치(가상 Rest Api)

- vscode 상단부 -> 터미널 -> 새 터미널

```shell script
$ mkdir json-virtual-server
$ cd json-virtual-server
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가

    : 라이브러리에 가상서버 실행시키려면 아래와 같이 명령어가 긴데 start로 축약시킴
    
    : 5000번 포트에서 가상서버를 실행시키고, 데이터베이스는 db.json이라는 것을 쓰겠다는 의미
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
- json-server-exam폴더로 가서
- `$ npm start`로 서버실행

---
