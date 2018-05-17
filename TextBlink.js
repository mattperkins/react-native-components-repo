
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Blink extends React.Component {  
    constructor(props) {
        super(props)
            this.state = {
                showText: true
    }

    let taskTodo = () => {
        this.setState(prevState => {
            return {
                showText: !prevState.showText
            }
        })  
    }

    const timeToBlink = 500
    setInterval(taskTodo, timeToBlink)
}

    render(){
        let TextToDisplay = this.state.showText ? this.props.inputText : ' '
        return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}><Text style={this.props.style}>{TextToDisplay}</Text></View>
    }
}





export default class TextBlink extends React.Component {
    render() {
        return <Blink style={{fontSize: 40}} inputText="I am blinking marvelous" />
    }
}


