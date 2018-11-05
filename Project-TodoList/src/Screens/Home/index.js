import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Easing,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import AnimPath from '../../Animations/boot.json';

export default class Home extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        opacity_logo: new Animated.Value(0),
        opacity_button: new Animated.Value(0),
    }

    componentWillMount(){
        Animated.parallel([
            Animated.timing(this.state.opacity_logo,{
                delay:1250,
                duration:2000,
                toValue:1,
                easing : Easing.bounce
            }),
            Animated.timing(this.state.opacity_button,{
                delay:3000,
                duration:1250,
                toValue:1,
                easing:Easing.bounce                
            })
        ]).start()             
    }

    onButtonPressed = () => {
       this.props.navigation.navigate('Feed')
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo_container}>
                    <Text style={styles.logo}>Todo</Text>
                    <Animated.View style={{ opacity: this.state.opacity_logo }}>
                        <Text style={styles.logo_second}>List</Text>
                    </Animated.View>
                </View>
                <LottieView
                    source={AnimPath}
                    autoPlay
                />
                <View style={styles.bottom_container}>
                    <Animated.View style={{opacity:this.state.opacity_button}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={this.onButtonPressed}>
                            <Icon name='angle-double-right' size={32} />
                            <Text style={{textAlign:'center',textAlignVertical:'center',marginLeft:8}}>Not Defterini Aç</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        ...Platform.select({
            ios: { marginTop: 15 },
            android: { marginTop: 0 }
        }),
        backgroundColor: '#DCEDC8'
    },
    logo_container: {
        flex: 1,
        marginTop: 125,
        flexDirection: 'row'
    },
    logo: {
        fontSize: 25,
        color: '#689F38'
    },
    logo_second: {
        fontSize: 25,
        color: '#8BC34A'
    },
    bottom_container: {
        alignItems: 'center',
        marginBottom: 150
    }
})