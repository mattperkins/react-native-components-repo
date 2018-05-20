

import React from 'react'
import { Text, View, TextInput, Keyboard } from 'react-native'


export default class Props extends React.Component{
    constructor(props) {
    super(props)
        this.state = {
           email: ' ',
           password: ' ',
           message: 'Add your message here...'
        }
    }

    UNSAFE_componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=> {
            this.setState(()=> {
                return { message: 'Keyboard is shown' }
            })
        })
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=> {
            this.setState(()=> {
                return { message: 'Keyboard is Hidden' }
            })
        })
    }
    componentWillUnmount(){
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    render() {            
        return (
            
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput 
                    style={{
                        width: '50%',
                        height:40,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    autoFocus={false}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='#333'
                    onChangeText={ (text) => {
                            this.setState((previousState) => {
                                return { email: text }
                            })} }
                />
                <Text style={{marginVertical: 50}}>{this.state.email}</Text>


                <TextInput 
                    style={{
                        width: '50%',
                        height:40,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    placeholderTextColor='#333'
                    secureTextEntry={true}
                    onChangeText={ (text) => {
                            this.setState(() => {
                                return { password: text }
                            })} }
                />
                <Text style={{marginVertical: 50}}>{this.state.password}</Text>

                <Text>{this.state.message}</Text>
                <TextInput 
                    style={{
                        width: '50%',
                        height: 100,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderLeftColor='blue'
                    borderLeftWidt={1}
                    borderRightColor='red'
                    borderRightWidth={2}
                    editable={true}
                    onSubmitEditing={Keyboard.dismiss}
                    returnKeyType='done'
                    onChangeText={ (text) => {
                            this.setState(() => {
                                return { message: text }
                            })} }
                />
            </View>
       
        )
    }
}




