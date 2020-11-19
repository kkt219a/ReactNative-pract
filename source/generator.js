
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';

//버튼태그 title 요소 필수, 버튼에 새겨질 글자
// ios와 android 버튼이 default 모양이 다르니 참고
const Generator = (props) =>{
    return(
        <View style={styles.generator}>
            <Button
                onPress={()=>props.add()}
                title="Add Number"
            />
        </View>
    )
}

//Text는 View의 style을 따르기 때문에 줄바꿈 된다. 다 차면
const styles = StyleSheet.create({
  generator:{
    backgroundColor:'#1498f0',
    alignItems:'center',
    width:'100%',
    padding:5
  }
})
export default Generator;
