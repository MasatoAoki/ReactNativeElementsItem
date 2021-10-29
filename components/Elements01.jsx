import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button,Header,Switch } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Elements01 = () => {
    return (
        <View style={styles.TitleContainer}>
            <Header
             leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
             centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
             rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text style={styles.Titletxt}>AokiTXT</Text>
            <Button
                title="Aoki"
                type="outline"
            />

            <Button
            icon={
                     <Icon
                         name="arrow-right"
                         size={15}
                         color="white"
                     />
                     }
             title="Masato"
            />

<Switch value={true} />

<Switch value={false} color="orange" />


        </View>

    )
}


const styles = StyleSheet.create({

    TitleContainer: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    Titletxt: {
        fontSize: 20,
        fontWeight: "700"
    },
});


export default Elements01;