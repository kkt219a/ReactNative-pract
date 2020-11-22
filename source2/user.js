import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class UserScreen extends Component{

    //headerBack은 아이폰에서 뒤로가기 '<'옆에 title을 임의로 설정해주기 위함이다. 
    //여기서 헤드라이터와 좌측 back은 같이 작용하나 다르다
    // 좌측 디포트 백은 전단계고 우측은 네비게이터를 통해 홈으로 가는 거다.
    
    headerStyle = () => {
        this.props.navigation.setOptions({
            title:'custom',
            headerStyle:{
                backgroundColor:'blue'
            },
            headerTintColor:'yellow',
            headerTitleStyle: {
              fontWeight:'bold',
              color:'green'
            },
            headerBackTtile:'BACK',
            headerRight:() =>(
                <Button
                  title="info2"
                  onPress={()=>
                    this.props.navigation.navigate('home')
                 }
                  color="orange"
                />
              )
          })
    }
  render(){ 

    //위의 스타일을 불러온다
    this.headerStyle();
    //home에서 보냈던 route값을 받는다 parameter로
    const {params} = this.props.route;
    const useridx=params?params.useridx:null;
    const username=params?params.username:null;
    const userlastname=params?params.userlastname:null;

    //stringfy로 string화
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>user</Text>
            <Button 
                title="to home screen"
                onPress={() => (
                    this.props.navigation.navigate('home')
                )}
            />
            <Text>useridx: {JSON.stringify(useridx)}</Text>
            <Text>username: {JSON.stringify(username)}</Text>
            <Text>userlastname: {JSON.stringify(userlastname)}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

})
export default UserScreen;
