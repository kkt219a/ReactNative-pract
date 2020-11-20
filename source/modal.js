import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class ModalComponent extends Component{

    state={
        modal:false
    }

    //modal 상태가 true인지 false인지
    // 화면상 가장 위에 Layer를 만들지 아닐지 정하는 함수
    handleModal = () => {
        this.setState({
            modal:this.state.modal?false:true
        })
    }
    render(){
        return (
            <View
                style={{width:'100%'}}
            >
                <Button 
                    title="Open Modal"
                    onPress={this.handleModal}
                />

                <Modal
                    visible={this.state.modal}
                    animationType={'slide'} // none, slide, fade
                    onShow={()=>alert("modal!")} //모달창이 떳을때 trigger하는 property
                >
                    <View style={{
                        marginTop:60,
                        backgroundColor:'red'
                    }}>
                        <Text>This is modal content</Text>
                    </View>
                    <Button 
                    title="goback"
                    onPress={this.handleModal}
                    />
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    }
})

export default ModalComponent;