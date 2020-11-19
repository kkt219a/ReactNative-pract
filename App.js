import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, Button,TextInput } from 'react-native';
import Header from './source/header';
import Generator from './source/generator';
import NumList from './source/numlist';
import Input from './source/input';

class App extends Component{

  //왜 여기서 할까?
  // react는 부모에서 자식으로 내려가는 구조다. input에서 app으로
  // 값을 올려줄 수 없다!

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
        <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            autoCapitalize={'none'}
            editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width:'100%'}}>
        {
          this.state.alphabet.map((item,idx) =>(
            <Text
              style={styles.mainText}
              key={idx}
            >
              {item}
            </Text>
          ))
        }
        </ScrollView>
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
  }
})
export default App;
