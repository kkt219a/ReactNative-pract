/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'; //react 라는 모듈에서 중괄호에 속한 것을 불러옴
import { View, Text, StyleSheet } from 'react-native'; // 화면을 띄우기 위해 View 필요
import PropsChild from './react_propsChild';

//component를 app이라는 클래스가 상속받음 이 안에는
// 화면을 랜더링 하는 함수가 있고, 리턴하는 것들이 화면을 구성하게 된다!
class App extends Component{
  
  state={
    sampleText: 'hello world',
    sampleBoolean: false,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean ?
      <Text>SampleBoolean is True</Text>
    :
      <Text>SampleBoolean is false</Text>
  )
  
  changeState = () => {
    //this.state.sampleText: 'HI~' // 얘처럼 바로 바꾸면 안됨
    // setstate가 있어야 반영을 시켜서 랜더링 할 수 있음
    // state는 랜더링된 데이터를 관리하기때문에 직접 수정이 불가능하게 설정됨

    // 비동기성, state는 워낙 조심히 다뤄야하는 객체라서 그 성능 향상을 위해서
    // 단일 업데이트를 지원, setstate로 변경할 때는 현재 버전을 카피한 다음에
    // 업데이트를 진행하게 된다.

    if(!this.state.sampleBoolean){
    this.setState({
      sampleText: "text Changed!",
      sampleBoolean: true
    })
    }
    else{
      this.setState({
        sampleText: "Hello world",
        sampleBoolean: false
      })
    }

  }

  onAdd = () => {
    // 현재버전을 카피하고 업데이트한다!! 그러면 현재의 수를 가져와서 +1한 값을
    // 넣어줘야하는데 그게 prevState, 그리고 return으로 되돌려주기
    this.setState(prevState => {
      return{
        sampleNum: prevState.sampleNum+1
      }
    })

  }

  //props: read only, 수정 변경이 불가한 읽기전용 프로퍼티.
  // 부모자식 관계가 형성되야 의미가 있음.
  // 리액트나 리액트 네이티브나 일방통행. 부모로부터 자식에게 데이터가 전해진다.
  // 자식 컴포넌트는 부모로부터 props라는 데이터를 받고 그 값은 자식 컴포넌트 내에서
  // 수정, 변경되지 않고 그대로 쓰이게 된다. 
  // 왜 쓰는가? 한 부모에게 여러 자식이 있을 수 있다.
  // 부모가 첫째자식에게 편지 쓰고 둘째자식에게도 같은 편지 쓰고, 세번째, 네번쨰...
  // 비효율 적이네? 부모는 편지 원본을 가지고 있고, 100명에게 복사본 줄 수 있으면
  // 좋겠지. 부모가 가지고 있는 정보를 원본 그대로 자식에게 전해줄 수 있다.
  

  render(){ //this는 리액트 문법이아니다, 자바스크립트 문법, 상위 스코프를 가리킨다.
    return (
      <View style={styles.background}>
        <Text onPress={this.changeState}>
          {this.state.sampleText}
        </Text>
        {this.inputText()}
        <Text onPress={this.onAdd}>
          {this.state.sampleNum}
        </Text>
        <PropsChild sText={(this).state.sampleText} cState={(this).changeState}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: { // 가운데 정렬
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default App;
