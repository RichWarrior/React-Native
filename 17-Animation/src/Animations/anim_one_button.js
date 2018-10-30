import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

class MyFirstAnimWithButton extends Component {

    state = {
        /*redSquare: new Animated.ValueXY(0, 0)*/
        redSquare : new Animated.Value(0)
    }    

    myOnPressButton = () => {        
        /*Animated.spring(this.state.redSquare,{
            toValue:{x:100,y:350},
            friction:1
        }).start()*/

        Animated.timing(this.state.redSquare,{
            toValue : 1,
            delay:1250,
            duration:2000,
            easing : Easing.bounce
        }).start()
    }

    render() {
        return (
            <View
                style={{ flex: 1 }}>
                <Animated.View
                    /*style={this.state.redSquare.getLayout()}*/
                    style={{opacity:this.state.redSquare}}>
                    <View
                        style={styles.container}>
                        <Text>Hi Guys</Text>
                    </View>
                </Animated.View>
                <Button title='Start Animation'
                    onPress={() => this.myOnPressButton()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginTop: 30,
    }
})


export default MyFirstAnimWithButton;