import Expo from 'expo' // add if this component is app entry point

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


class Props extends React.Component{
    render() {
        let msg = `Hello ${this.props.msg}`
        return (
            <Text style={{marginTop: 200, textAlign: 'center'}}>{msg}</Text>
        )
    }
}

export default Expo.registerRootComponent(Props) // add to whichever component you wish as the entry point to your app
