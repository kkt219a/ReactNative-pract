import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

class Input extends Component{
    state ={
        myTextInput: ''
    }

    //event 인자에 입력된 텍스트 값이 myTextInput으로 들어간다
    onChangeInput=(event) =>{
        this.setState({
            myTextInput:event
        })
    }

    render(){
        return (
            <View
                style={styles.mainView}
            >
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={100}
                    autoCapitalize={'none'}
                    editable={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView:{
        width:'100%'
    },
    input:{
        width:'100%',
        backgroundColor:'#cecece',
        marginTop:20,
        fontSize:25,
        padding:10
    }
})

export default Input;