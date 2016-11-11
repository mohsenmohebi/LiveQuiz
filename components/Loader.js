import React, {Component} from 'react';
import {View , WebView} from 'react-native';

import clrs from '../utils/clrs';
import Spinner from 'react-native-loading-spinner-overlay';


export default class WebViewLoader extends Component {
 constructor(props) {
    super(props);
   const url =  props.url;
//    console.warn(props.url);
  }

    render(){
    return(
        <View style={{
            backgroundColor: clrs.white,
            borderLeftColor: clrs.black,
            borderLeftWidth:1,
            flex:1,
            marginTop:90,
        }}>
        <Spinner  visible={false} />
        </View>
        
    );
    }
}
