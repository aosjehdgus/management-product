const fs = require('fs');

const express    = require('express');
const bodyParser = require('body-parser');
const app  = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// database.json 파일 읽어오기
// 해당 환경 설정 데이터 parsing해서 가져오기
// mysql 불러오기

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

// 연결과 관련된 변수 설정하기

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

// customers api 만들기
// 사용자가 customers 경로에 접속을 한 경우
// DB에 접근해서 query를 날릴 수 있도록 코딩

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));