import _default from 'atob';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Alert } from 'react-native';
import { Button,Header,Switch, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Elements02 from '../components/Elements02';

const Screen01 =() => {
    return(
        <SafeAreaView style={styles.Icon01}>
            <Elements02
            aoki="まさと"
            onPress={() => Alert.alert("青木将人")}
            />

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    Icon01:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
})


export default Screen01;