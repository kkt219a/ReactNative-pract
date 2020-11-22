import React, { Component } from 'react';
import { Image } from 'react-native';

import Logos from '../assets/images/home_icon.png';
class LogoTitle extends Component{
render(){ 
    return (
        <Image
            style={{width:40, height:40}}
            source = {Logos}
        />
    )
  }
}

export default LogoTitle;
