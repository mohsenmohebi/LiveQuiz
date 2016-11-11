import React, {Component} from 'react';
import {View , WebView} from 'react-native';
import clrs from '../utils/clrs';

const Quiz = ({url}) => {
    return(
        <View style={{
            backgroundColor: clrs.blue,
            borderLeftColor: clrs.black,
            borderLeftWidth:1,
            flex:1,
            marginTop:60,
        }}>
            <WebView 
                style={{
                    flex:1,
                    backgroundColor: clrs.blue,
                }}
                source={{
                    uri: url, 
                    method: 'GET'}} />
        </View>
        
    );
};

Quiz.propTypes = {
    url: React.PropTypes.string,
};

export default Quiz;