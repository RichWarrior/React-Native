import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, RefreshControl } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Card, CardItem, Toast } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import axios from 'axios';

export default class Feed extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        todos: [],
        refresh : true
    }

    componentWillMount() {
        this.retrievePost()
    }

    retrievePost = () => {        
        axios({
            method: 'GET',
            url: 'https://rn-todolist-2f5be.firebaseio.com/posts.json'
        }).then(response => {
            let todo = [];
            for (var key in response.data) {
                todo.push({
                    ...response.data[key],
                    id: key
                })
            }
            this.setState({
                todos: todo,
                refresh : false
            })
            console.log(this.state.todos)
        })        
    }

    navigatePost = () => {
        this.props.navigation.navigate('Posts')
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#689F38' }}>
                    <StatusBar
                        backgroundColor="#8BC34A"
                        barStyle="light-content"
                    />
                    <Body>
                        <Title>Notlarım</Title>
                    </Body>
                    <Right>
                        <Icon name='plus' size={32} color='#DCEDC8' onPress={this.navigatePost} />
                        <Icon name='refresh' size={32} color='#DCEDC8' onPress={this.retrievePost} style={{ marginLeft: 8 }} />
                    </Right>
                </Header>
                <Container>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refresh}
                                onRefresh={this.retrievePost}
                            />
                        }
                    >
                        {
                            this.state.todos.map((item, index) => (
                                <Card style={{ padding: 12 }}>
                                    <CardItem header style={{ margin: 12 }}>
                                        <Text>{item.title}</Text>
                                    </CardItem>
                                    <CardItem style={{ margin: 12 }}>
                                        <Body>
                                            <Text>
                                                {item.body}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            ))
                        }
                    </ScrollView>
                </Container>
            </Container>
        )
    }
}