import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';


const Elements01 = () => {
    return (
        <View style={styles.TitleContainer}>
            <Text style={styles.Titletxt}>AokiTXT</Text>
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