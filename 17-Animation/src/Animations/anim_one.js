import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated,Easing } from 'react-native';

class AnimOne extends Component {

    state = {
        redSquare : new Animated.ValueXY(0,0)
    }

    componentWillMount() {
        
        //this.redSquare = new Animated.ValueXY(0, 0);
                
        /*Animated.spring(this.redSquare, {
            toValue: { x: 100, y: 300 },
            friction:1                    
        }).start()*/

        /*Animated.timing(this.redSquare,{
            toValue:{x:100,y:300},
            duration:1250,
            delay:2000,
            easing : Easing.bounce
        }).start()*/

        Animated.spring(this.state.redSquare,{
            toValue:{x:100,y:300},
            friction:2
        }).start()       
        

    }

    render() {
        return (
            <Animated.View
                /*style={{
                    left : this.redSquare.x,
                    top:  this.redSquare.y,
                }}>*/
                style={this.state.redSquare.getLayout()}
                >
                <View style={styles.square}>
                    <Text>Hello ! This Is My First Animation</Text>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    }
})

export default AnimOne;