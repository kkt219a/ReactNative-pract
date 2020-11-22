import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import 'react-native-gesture-handler';

class DrawerHomeScreen extends Component{

render(){ 

    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home</Text>
            <Button 
                title="to user screen"
                onPress={() => (
                    this.props.navigation.navigate('user')
                )}
            />
        </View>
    )
  }
}

export default DrawerHomeScreen;
