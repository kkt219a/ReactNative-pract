import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';

class HomeScreen extends Component{

// 유저스크린으로 보내느 파라미터, 이 값들이 유저 스크린의 루트값이 되는거다
  render(){ 

    //setOptions를 이용해서도 지금의 타이틀을 바꿀 수 있고
    // 배경색, 글자 색 등 여러가지 변경이 가능하다

    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>home</Text>
            <Button 
                title="to user screen"
                onPress={() => (
                    this.props.navigation.navigate('user',{
                    useridx:110,
                    username:'gil',
                    userlastname:'hong'
                    })
                )}
            />
            <Button
                title="change the tilte"
                onPress={ () =>
                    this.props.navigation.setOptions({
                        title:'Changed!!!',
                        headerStyle:{
                            backgroundColor:'pink'
                        },
                        headerTintColor:'red'
                    })
                }
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({

})
export default HomeScreen;
