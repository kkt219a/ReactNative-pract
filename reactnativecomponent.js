import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './source/header';
import Generator from './source/generator';
import NumList from './source/numlist';
import Input from './source/input';
import Picker from './source/picker';
import picc from './assets/images/steak.png';
import Modal from './source/modal';
class App extends Component{


  state ={
      myTextInput: '',
      alphabet:['a','b','c','d']
  }

  //event 인자에 입력된 텍스트 값이 myTextInput으로 들어간다
  onChangeInput=(event) =>{
      this.setState({
          myTextInput:event
      })
  }

  //넣고나면 다음 것을 넣어야 하니까 비워두고 지금 값을 alphabet에 넣어준다.
  onAddTextInput= () =>{
    this.setState(prevState=>{
      return {
        myTextInput:'',
        alphabet:[...prevState.alphabet,prevState.myTextInput]
      }
    })
  }

  render(){ 
    return (
      <View style={styles.mainView}>
        <Modal />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'white',
    marginTop:50,
    flex:1,
    alignItems:'center',
    //justifyContent:'center'
  },
  subView:{
    backgroundColor:'yellow',
    marginBottom:10
  },
  anothersubView:{
    flex:2,
    backgroundColor:'yellow',
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize:20,
    fontWeight:'normal',
    color:'#1498f0',
    padding:20,
    margin:20,
    backgroundColor:'#e5e5e5'
  },
  input:{
    width:'100%',
    backgroundColor:'#cecece',
    marginTop:20,
    fontSize:25,
    padding:10
  },
  image:{
    backgroundColor:'red',
    width:'100%',
    height:300
  }
})
export default App;
