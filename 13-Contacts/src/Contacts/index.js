import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Contacts from 'react-native-contacts';

class ContactsComponent extends Component {

    state = {
        myContacts: []
    }

    getContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err) {
                console.log('Permission Error')
            } else {
                console.log(contacts)
                this.setState({
                    myContacts: contacts
                })
            }

        })
    }

    addContacts = () => {
        const newContacts = {
            emailAddress: [{
                label: 'Home',
                email: 'farukteknoloji@gmail.com'
            }],
            familyName: 'Faruk',
            givenName: 'Developer Faruk'
        }

        Contacts.addContact(newContacts, (err) => {
            if (err) {
                console.log(err)
            } else {
                alert('Succesfully')
                this.getContacts();
            }
        })
    }

    openContactForm = () => {
        const newContact = {            
            givenName: 'Developer Faruk'
        };

        Contacts.openContactForm(newContact, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }

    search = () => {
        Contacts.getContactsMatchingString('Faruk',(err,contacts)=>{
            if(err){
                console.log(err)
            }else{
                this.setState({
                    myContacts:contacts
                })
            }
        })
    }

    render() {
        return (
            <View>
                {
                    this.state.myContacts.map(contact => (
                        <Text>{contact.givenName} {contact.familyName}</Text>
                    ))
                }
                <Button
                    title='Load Contacts'
                    onPress={() => this.getContacts()} />

                <Button
                    title='Add Contact'
                    onPress={() => this.addContacts()} />
                <Button
                    title='Open Contact Form'
                    onPress={() => this.openContactForm()} />
                <Button 
                    title='Search'
                    onPress={()=>this.search()} />
            </View>
        )
    }
}

export default ContactsComponent;