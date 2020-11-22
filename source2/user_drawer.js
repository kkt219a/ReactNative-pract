import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import logos from '../assets/images/home_icon.png';

class DrawerUserScreen extends Component{

    //user 전용, user에서만 그림 보임
    drawerStyle=() => {
        this.props.navigation.setOptions(
        {drawerIcon:() => (
            <Image
              source={logos}
              style={{width:40, height:40}}
            />
        )})
    }

render(){ 
    this.drawerStyle();
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>user</Text>
            <Button 
                title="to home screen"
                onPress={() => (
                    this.props.navigation.navigate('home')
                )}
            />
        </View>
    )
  }
}

export default DrawerUserScreen;
