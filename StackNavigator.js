import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './source2/home';
import UserScreen from './source2/user';

import LogoTitle from './source2/logo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component{

logoTitle = () => {
  return (
    <Image
      style={{width:40, height:40}}
      source = {require('./assets/images/home_icon.png')}
    />
  )
}

 

//헤더파일에 그림은 어떻게 삽입할까?

render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName = "home"
          screenOptions = {{
            headerStyle:{
                backgroundColor:'#cbcbcb'
            },
            headerTintColor:'#ffffff',
            headerTitleStyle: {
              fontWeight:'bold',
              color:'#121212'
            }
          }}
        >
          <Stack.Screen 
            name="home" 
            component={HomeScreen} 
            options = {{
              title:'Homes',
              headerTitle:<LogoTitle/>,
              headerRight:() =>(
                <Button
                  title="info"
                  onPress={()=>alert("info!")}
                  color="orange"
                />
              )
            }}
          />
          <Stack.Screen 
            name="user" 
            component={UserScreen}
            initialParams = {{
              useridx:20,
              username:'kkk',
              userlastname:'kim'
            }}
            // options = {{
            //   title:'user screen',
            //   headerStyle:{
            //       backgroundColor:'#1498f0'
            //   },
            //   headerTintColor:'red',
            //   headerTitleStyle: {
            //     fontWeight:'bold',
            //     color:'purple'
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({


})
export default App;
