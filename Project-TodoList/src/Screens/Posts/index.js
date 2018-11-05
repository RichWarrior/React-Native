import React, { Component } from 'react';
import { View, Text, StatusBar,TouchableOpacity } from 'react-native';
import { Container, Header, Body, Right, Left, Title, Form, Label, Input, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default class PostData extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        title: '',
        body : '',
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onTitleHandler = (value) =>{
        this.setState({
            title : value
        })
    }

    onBodyHandler = (value) =>{
        this.setState({
            body : value
        })
    } 

    onPost = () =>{
        const request = axios({
            method:'POST',
            url:'https://rn-todolist-2f5be.firebaseio.com/posts.json',
            data:this.state
        }).then(response =>{
            if(response.status === 200){
                this.onBackPress()
            }else{
                alert('UnSuccesfully')
            }
        })
        
    }
    

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#689F38' }}>
                    <StatusBar
                        backgroundColor="#8BC34A"
                        barStyle="light-content"
                    />
                    <Left>
                        <Icon name='arrow-circle-left' size={32} color='white' onPress={this.onBackPress} />
                    </Left>
                    <Body>
                        <Title>Notlarım</Title>
                    </Body>
                    <Right />
                </Header>
                <Container>
                    <Form>
                        <Item floatingLabel>
                            <Label>Title</Label>
                            <Input  onChangeText={(value) => this.onTitleHandler(value)}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Content</Label>
                            <Input multiline={true} onChangeText={(value) => this.onBodyHandler(value)} />
                        </Item>                        
                    </Form>
                    <TouchableOpacity style={{alignItems:'center',marginTop:16}} onPress={this.onPost}>
                            <Icon name='send' size={32} />
                            <Text>Ekle</Text>
                        </TouchableOpacity>
                </Container>
            </Container>
        )
    }
}