import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button} from 'react-native';
import logos from '../assets/images/home_icon.png';

class TabMessageScreen extends Component{
render(){ 
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Message</Text>
        </View>
    )
  }
}
export default TabMessageScreen;
