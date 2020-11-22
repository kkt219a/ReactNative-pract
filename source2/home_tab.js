import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button} from 'react-native';
import logos from '../assets/images/home_icon.png';

class TabHomeScreen extends Component{
render(){ 
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home</Text>
            <Button
                title="go to home_stack screen"
                onPress={() => {
                    this.props.navigation.navigate('Home_Stack');
                }}
            />
        </View>
    )
  }
}
export default TabHomeScreen;
