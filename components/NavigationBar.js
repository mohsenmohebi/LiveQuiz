import React, {Component} from 'react';
import {StyleSheet, Navigator, Text, TouchableOpacity,Image} from 'react-native';
import clrs from '../utils/clrs';
import {getBaseUrl,getUser} from '../utils/global';


const NavigationBarRouteMapper = {

    LeftButton: (route, navigator) => {
        if(route.id === 'Logon'){
            return null;
        }
        if(route.id === 'MAIN'){
            return( <TouchableOpacity
                    onPress={() => {
                            var url = getBaseUrl() + 'contest/' + getUser();
                            console.log(url);
                            navigator.push({id: 'MAIN' , title: 'Live Quiz', url: url });
   
                    } }
                    style={styles.navBarLeftButton}>
                    <Image style={styles.navBarIcon} source={require('../resources/home.png')} />
                </TouchableOpacity>
            );

        }


        return(
            <TouchableOpacity
            onPress= { ()=> navigator.pop() }
            style= {styles.navBarLeftButton }>
            <Text style= {[styles.navBarText, styles.navBarButtonText]}>
             Back
             </Text>
             </TouchableOpacity>
        );
    },

    RightButton: () => {
        return null;
    },

    Title: (route) => {
        return(
            <Text style= {[styles.navBarText, styles.navBarTitleText]}>
            {route.title}
            </Text>
        );
    },

};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: clrs.blue,
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
        color: clrs.white,
    },
    navBarTitleText: {
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarIcon: {
        width: 18,
        height: 18,
        marginTop: 15
    },


});

export default (
    <Navigator.NavigationBar
        style={ styles.navBar}
        routeMapper= { NavigationBarRouteMapper}/>
);