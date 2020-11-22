import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, Linking, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';

import LogoTitle from './source2/logo';
import PictogramHome from './assets/images/home_icon.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabHomeScreen from './source2/home_tab';
import TabUserScreen from './source2/user_tab';
import StackHomeScreen from './source2/home';
import StackUserScreen from './source2/user';
import TabMessageScreen from './source2/message_tab';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import SideDrawer from './source2/my_drawer';
/* 
  Stack Navigator
    - Drawer Navigator w/ Drawer Screen C,D..
      - TabNavigator
        - Tab Screen F
        - Tab Screen G
    - Stack Screen B
    - Stack Screen C

*/
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderRight = () => {
  const navigation = useNavigation();
  return(
    <View style={{flexDirection:'row', paddingRight:15}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}
//하나의 Stack Screen의 Component로 Tab Navigator와
//TabScreen을 return 하는 함수

// Tab Navigator와 그 하위의 TabScreen들을 return한다.
// 그래서 이 전체가 Stack Navigator의 Component로 들어갈 것이다.
const TabComponent = () => {
  return (
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
    }}
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
  )
}

const DrawerComponent  = () => {
  return (
    <Drawer.Navigator
    initialRouteName="home"
    drawerType="front"
    drawerPostion="right"
    drawerStyle={{
      backgroundColor:'#c6cbef',
      width:200
    }}
    drawerContentOptions={{
      activeTintColor:'red',
      activeBackgroundColor:"skyblue"
    }}
    drawerContent={ props => <SideDrawer {...props} /> }
  > 
    <Drawer.Screen name="Route" component={TabComponent}/>
  </Drawer.Navigator>
  )
}


  //1번째 인자는 focused라는 bolean, 2번째는 터치 되었느냐 판별 변수
  //이미지를 커지게 하는 함수이다.
const TabBarIcon=(focused, name)=>{
  let iconImagePath;
  let iconName,iconSize;
  if(name==='home'){
    iconName = 'home-outline';
    iconImagePath = require('./assets/images/home_icon.png');
  }else if(name==='user'){
    iconName = 'people-outline';
    iconImagePath = require('./assets/images/home_icon.png');
  }else if(name='message'){
    iconName = 'mail-outline';
    iconImagePath = require('./assets/images/home_icon.png');
  }

  iconSize = focused?30:20;
  return (
    // <Image
    //   style={{
    //     width:focused?30:20,
    //     height:focused?30:20
    //   }}
    //   source={iconImagePath}
    // />
    <Ionicons
      name={iconName}
      size={iconSize}
    />
    
  )
}

class App extends Component{

render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='home'
        >
          <Stack.Screen
          name="Main" 
          component={DrawerComponent}
          options={{
            headerRight:({}) => <HeaderRight/>
          }}
          />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen}/>
          <Stack.Screen name="User_Stack" component={StackUserScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({


})
export default App;
