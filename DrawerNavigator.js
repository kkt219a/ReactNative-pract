import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, Linking } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import LogoTitle from './source2/logo';
import PictogramHome from './assets/images/home_icon.png';
import DrawerHomeScreen from './source2/home_drawer';
import DrawerUserScreen from './source2/user_drawer';
import SideDrawer from './source2/my_drawer';

const Drawer = createDrawerNavigator();

// 스크롤뷰, 아이템 리스트를 넣어줄 것이다.
// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem 
//         label="help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//       />
//       <DrawerItem 
//         label="Info"
//         onPress={() => alert('info Window')}
//       />
//     </DrawerContentScrollView>
//   )
// }

class App extends Component{

render(){ 
    return (
      <NavigationContainer>
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
          <Drawer.Screen 
            name="home" 
            component={DrawerHomeScreen}
            options={{drawerIcon:() => (
              <Image
                source={PictogramHome}
                style={{width:40, height:40}}
              />
            )}}
          />
          <Drawer.Screen name="user" component={DrawerUserScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({


})
export default App;
