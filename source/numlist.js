
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// map 모르면 es6 강의 .. arrow function에서 설명함
// map은 자바스크립트 배열 객체 내장 함수, 루프문
// 요소 수만큼 루프 도는데 값과 인덱스를 저렇게 써서 한다
const NumList = (props) =>{
    return(
        props.num.map((item,idx)=>(
            <TouchableOpacity
            style={styles.numList}
            key={idx}
            onPress={()=>props.delete(idx)}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
  numList:{
    backgroundColor:'#e5e5e5',
    alignItems:'center',
    width:'100%',
    padding:5,
    marginTop:5
  }
})
export default NumList;
