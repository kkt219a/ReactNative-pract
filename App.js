import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, Linking } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';

import LogoTitle from './source2/logo';
import PictogramHome from './assets/images/home_icon.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './source2/home_tab';
import TabUserScreen from './source2/user_tab';
import TabMessageScreen from './source2/message_tab';
const Tab = createBottomTabNavigator();

  //1번째 인자는 focused라는 bolean, 2번째는 터치 되었느냐 판별 변수
  //이미지를 커지게 하는 함수이다.
const TabBarIcon=(focused, name)=>{
  let iconImagePath;
  if(name==='home'){
    iconImagePath = require('./assets/images/home_icon.png');
  }else if(name==='user'){
    iconImagePath = require('./assets/images/home_icon.png');
  }else if(name='message'){
    iconImagePath = require('./assets/images/home_icon.png');
  }

  return (
    <Image
      style={{
        width:focused?30:20,
        height:focused?30:20
      }}
      source={iconImagePath}
    />
  )
}

class App extends Component{

render(){ 
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='home'
          tabBarOptions={{
            activeBackgroundColor:'skyblue',//터치시 배경
            activeTintColor:'blue',//터치시 글자색
            inactiveTintColor:"#fff", //비터치시 글자색
            style:{
              backgroundColor:'#c6cbef' //기본 배경색
            },
            labelPosition:'below-icon'
            //beside-icon: icon 옆에 글자가 붙게
            //below-icon: icon 밑에 글자가 오게
          }}
          //
          screenOptions={({route})=>({
              tabBarLabel:route.name,
              tabBarIcon: ({focused})=>(
                TabBarIcon(focused,route.name)
              )
            })}
        >
          <Tab.Screen name="home" component={TabHomeScreen}/>
          <Tab.Screen name="user" component={TabUserScreen}/>
          <Tab.Screen name="Message" component={TabMessageScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({


})
export default App;
