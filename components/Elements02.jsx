import _default from 'atob';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Alert } from 'react-native';
import { Button,Header,Switch } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Elements02 = (props) => {
    return(
        <View>
             <Button
                title="Aoki"
                type="outline"
                onPress={() => Alert.alert("戻るがタップされました")}
            />
            <Button
                title= {props.aoki}
                type="outline"
                onPress = {props.onPresstest}
            />
            <Text>
                {props.aoki}
            </Text>


        </View>

    )
}


export default Elements02;