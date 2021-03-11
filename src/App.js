import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

//customers를 배열 형태로 만든다(여러명의 고객을 추가하기 위해서)
// 
const customers = [
  
{
  'id'       : '1',
  'image'    : 'https://placeimg.com/64/64/1',
  'name'     : '동글',
  'birthday' : '930121',
  'gender'   : '남자',
  'job'      : '개발자'
},
{
  'id'       : '2',
  'image'    : 'https://placeimg.com/64/64/2',
  'name'     : '당그리',
  'birthday' : '930121',
  'gender'   : '남자',
  'job'      : '개발자'
},
{
  'id'       : '3',
  'image'    : 'https://placeimg.com/64/64/3',
  'name'     : '치동',
  'birthday' : '930121',
  'gender'   : '남자',
  'job'      : '개발자'
}

]


class App extends Component{
  render(){

    return(
        <div>
          {
            customers.map(c => {
              return(
                <Customer
                  key      = {c.id} 
                  id       = {c.id}
                  image    = {c.image}
                  name     = {c.name}
                  birthday = {c.birthday}
                  gender   = {c.gender}
                  job      = {c.job}
                />
              );            
            })
          }
           
        </div>


    );

  }

}


export default App;
