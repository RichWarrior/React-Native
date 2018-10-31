import React, { Component } from 'react';
import { StyleSheet, View ,SafeAreaView,Animated,Easing,TouchableOpacity,Text,Platform} from 'react-native';

export default class MyAnimation extends Component{

    state = {
        //redSquare : new Animated.ValueXY(0,0)
        myOpacity : new Animated.Value(1),
        op_value : 1
    }

    onPressMethod = () => {
        Animated.timing(this.state.myOpacity,{
            toValue:this.state.op_value === 1 ? 0 : 1,
            duration:1750,
            easing : Easing.bounce
        }).start()
        this.setState({
            op_value : this.state.op_value === 1 ? 0 : 1
        })
    }

    /*componentWillMount(){
        Animated.timing(this.state.redSquare,{
            toValue:{x:100,y:250},
            delay:1000,
            duration:1000,
            easing : Easing.bounce
        }).start()
    }*/

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Animated.View 
                    style={{
                        opacity:this.state.myOpacity,
                        transform:[{
                            rotateX:this.state.myOpacity.interpolate({
                                inputRange:[0,0.5,1],
                                outputRange:['0deg','180deg','0deg']
                            })
                        }]
                    }}
                >
                    <View style={styles.redSquare}>
                        <Text style={{color:'white',textAlign:'center',paddingTop:8}}>
                            {
                                Platform.OS === 'ios' ? 'Your OS IOS' : 'Your OS Android'
                            }
                        </Text>                        
                    </View>
                </Animated.View>           
                <TouchableOpacity style={{height:'auto'}} onPress={this.onPressMethod}>
                    <Text style={{alignContent:'center',alignItems:'center',color:'red',justifyContent:'center',marginTop:32,height:'auto'}}>Start Animation</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:12
    },
    redSquare:{       
        width:100,
        height:100, 
        ...Platform.select({
            ios:{backgroundColor:'blue'},
            android:{backgroundColor:'green'}
        }),
    }
})