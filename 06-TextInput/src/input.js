import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';

class  MyText extends Component{

    state = {
        myInput : 'Hello'
    }

    onChangeInput = (value) => {
       this.setState({
           myInput : value
       })
    }

    render (){
        return(
            <View>
                <TextInput 
                style={Styles.container}
                placeholder={this.state.myInput}
                onChangeText={this.onChangeInput}
                multiline={true}
            />
            <Text>{this.state.myInput}</Text>
                </View>
        )
    }
}

const Styles = StyleSheet.create({
    container :{
        width : '100%',
        backgroundColor : '#f2f2f2',
        textAlign:'center',
        margin: 10,
    }

})

export default MyText;