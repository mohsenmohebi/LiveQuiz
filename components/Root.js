import React, { Component } from 'react';
import {Navigator} from 'react-native';
//import Main from './Main';
import Quiz from './Quiz';
import NavigationBar from './NavigationBar';
import Logon from './Logon';

export default class Root extends Component{
    renderScene(route, navigator){
        if(route.id === 'Logon'){
            return <Logon navigator={navigator}/>
        }
        if(route.id === 'MAIN'){
            return <Quiz url={route.url} />;
        }
        return <Quiz url={route.url} />;

    }

    render(){
            return(
                <Navigator style={{ flex: 1}}
                    initialRoute = {{id: 'Logon' ,title: 'Logon', url: 'http://demo.ctasp.com/MillAPP/'}}
                    renderScene= {this.renderScene}
                    navigationBar= { NavigationBar }
                    />
            );
    }
}