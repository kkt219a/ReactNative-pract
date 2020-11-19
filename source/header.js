/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const Header = (props) =>(
    <TouchableOpacity
        style={styles.header}
        onPress={()=>alert("'hello'")}
    >
        <View>
          <Text>
            {props.name}
          </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  header:{
    backgroundColor:'pink',
    alignItems:'center',
    width:'100%',
    padding:5
  }
})
export default Header;
