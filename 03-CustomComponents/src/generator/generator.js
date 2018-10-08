import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


const generate = () => (
    <View>
        <Text style={styles.text_style}>5</Text>
    </View>
)

const styles = StyleSheet.create({
    text_style : {
        fontSize : 15,
        color : 'black',
        paddingTop: 15,
    }
});

export default generate;

