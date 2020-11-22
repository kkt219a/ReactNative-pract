import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, ScrollView } from 'react-native';
import logos from '../assets/images/home_icon.png';
import { CommonActions } from '@react-navigation/native';

class SideDrawer extends Component{

    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name:route,
                params:{},
            })
        )
    }
render(){ 
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={logos}
                            style={{width:40, height:40}}
                        />
                    </View>
                    <Text style={styles.sectionHeading}> Setion 1 </Text>
                    <View style={styles.navSectionStyle}>
                        <Text
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('home')}
                        >
                            Home
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('user')}
                        >
                            User
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={()=>alert('help window')}
                        >
                            Help
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={()=>alert('info window')}
                        >
                            Info
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{paddingLeft:10,paddingBottom:30}}>
                <Text>Copyright @ ktae, 2020.</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:80
    },
    imageContainer:{
        alignItems:'center',
        padding:50
    },
    sectionHeading:{
        color:'#fff',
        backgroundColor:'#ef9de4',
        paddingVertical:10,
        paddingHorizontal:15,
        fontWeight:'bold'
    },
    navSectionStyle:{
        backgroundColor:'#04b6ff'
    },
    navItemStyle:{
        padding:10,
        color:'#fff'
    }
})

export default SideDrawer;
