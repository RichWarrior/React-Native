import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (        
        props.items.map((item, i) => (
            <TouchableOpacity onPress={()=>alert(item)}>            
                <View>
                    <Text>{item}</Text>
                </View>
            </TouchableOpacity>
        ))
    )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});

export default ListItem;