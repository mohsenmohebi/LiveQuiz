'use strict';
import React, {PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Image,
  TouchableOpacity
} from 'react-native';
import clrs from '../utils/clrs';
import NumTextInput from 'react-native-num-textinput'
import {getBaseUrl,setUser} from '../utils/global';

export default class Logon extends Component{
     constructor(props) {
        super(props);
        const current = {};
        this.state = {
            user: current , 
            label: ' PhoneNumber:' , 
            buttonlabel:'Send Validation Code', 
            status: 'GetCode' , 
             };    

}

SendCode(){
    this.state.label = 'Enter The Code:';
    console.warn('code has been sent!!!');

}

   render() {
    return (
      <Image style={styles.containerImage} source={require('../resources/bg4.jpg')}>
        <View style={styles.container}>
                    <Image style = {styles.logoPicture} source={require('../resources/Logo.png')}/>
                        <View style={styles.innerContainer}>
                        <Text style={styles.general}>
                            {this.state.label}
                        </Text>
                        <NumTextInput
                            style={{
                                height: 40, 
                                borderColor: clrs.white, 
                                borderWidth: 1, 
                                borderRadius: 5,
                                backgroundColor: clrs.white}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            maxLength={10}
                            placeholder={this.state.label}
                        />
                    
                     </View>
                     <View>
                      <TouchableOpacity style={styles.button} onPress={(event)=>{
                          if(this.state.text === '')
                            return;
                          if(this.state.text === '101'){
                            var url = this.state.baseurl + 'host/question';
                            this.props.navigator.push({id: 'MAIN' , title: 'Question', url: url });
                            return;
                          }
                          if(this.state.text === '102'){
                            var url = this.state.baseurl + 'host/participant';
                            this.props.navigator.push({id: 'MAIN' , title: 'Participant', url: url });
                            return;
                          }
                            
                          if(this.state.status === 'GetCode'){
                            var url = getBaseUrl() + 'contest/' + this.state.text;
                            setUser(this.state.text);
                            console.log(url);
                            this.setState({text: '', label: 'Enter The Code' , buttonlabel: 'Submit' , status: 'Submit' , url: url });
                          }
                          if(this.state.status === 'Submit')
                            this.props.navigator.push({id: 'MAIN' , title: 'Live Quiz', url: this.state.url });
                      }}>
                      
                        <View>
                            <Text style={{ color: 'white', alignItems: 'center', justifyContent: 'center' , fontSize: 16, }}> {this.state.buttonlabel} </Text>
                        </View>
                    </TouchableOpacity>
                    </View>
        </View>
        <View style={[styles.overlay, { height: 360}]} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
      marginTop:20,
  },
   logoPicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop:70,
        backgroundColor:'transparent',
        
    },
    general: {
        fontSize: 16,
        marginVertical: 10,
        color: clrs.white,
    },
     button: {
        marginVertical: 10,
        // height: 10,
        // marginRight: 5,
        // marginBottom: 10,
        marginTop:10,
        justifyContent: 'center',
        padding: 4,
        // flex: 1,
        borderWidth: 1,
        borderColor:clrs.white,
        backgroundColor:clrs.red, 
        borderRadius: 5,
    },
    overlay: {
        marginTop:20,        
        // flex: 1,
        // position: 'absolute',
        // left: 70,
        // top: 240,
        padding:10,
        opacity: 0.5,
        backgroundColor: 'black',
        // width: 300,
        borderRadius: 5,
        
    },
    innerContainer:{ 
        alignItems: 'flex-start', marginTop: 5 
    },
});


