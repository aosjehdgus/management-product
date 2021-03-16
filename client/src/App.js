import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({

    root : {
      width : '100%',
      marginTop : theme.spacing.unit * 3,
      overflowX : "auto"
    },

    table : {
      minWidth : 1080
    },
    progress : {
      margin : theme.spacing.unit * 2
    }
})

//customers를 배열 형태로 만든다(여러명의 고객을 추가하기 위해서)

class App extends Component{

  state = {
    customers : "",
    completed : 0

  }
// 0-100으로 차는 게이지 같은 개념이기 때문에 0이란 값을 정해준다. 
  componentDidMount(){
  // 0.02초 마다 progress 함수가 실행 될 수 있도록 설정 
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed : completed >= 100 ? 0 : completed + 1 });
  }
  // completed가 100이 되는 순간 0으로 줄어들 수 있도록하고, 그렇지 않으면 계속해서 1씩 증가할 수 있도록 설정한다

  render(){

    const { classes } = this.props;

    return(
        <Paper className = {classes.root}>
          <Table className = {classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.customers ? this.state.customers.map(c => {
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
              // 위의 값을 불러오지 못하는 상태일 때(로딩중 일 때 아래의 값을 반환한다)
               : 
                <TableRow>
                  <TableCell colSpan = "6" align = "center">
                      <CircularProgress 
                        className = { classes.progress } varient = "determinate" value = {this.state.completed}/>
                  </TableCell>
                </TableRow>
                }
            </TableBody>
         </Table>

        </Paper>
    );
  }
}


export default withStyles(styles)(App);
