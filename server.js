const express    = require('express');
const bodyParser = require('body-parser');
const app  = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//customers api 만들기

app.get('/api/customers', (req, res) => {

    res.send([
        {
            'id'       : '1',
            'image'    : 'https://placeimg.com/64/64/1',
            'name'     : '동글',
            'birthday' : '930121',
            'gender'   : '남자',
            'job'      : '프론트엔드 개발자'
            },
            {
            'id'       : '2',
            'image'    : 'https://placeimg.com/64/64/2',
            'name'     : '당그리',
            'birthday' : '950204',
            'gender'   : '여자',
            'job'      : '디자이너'
            },
            {
            'id'       : '3',
            'image'    : 'https://placeimg.com/64/64/3',
            'name'     : '치동',
            'birthday' : '911023',
            'gender'   : '남자',
            'job'      : '웹 퍼블리셔'
            }
    ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));