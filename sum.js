import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

class sum extends Component {
    state = {
        number1: 0,
        number2: 0,
        Answer: 0

    }

    add = () => {
        alert('Answer : ' + this.state.Answer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font}> ADDITION </Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="  Number1"
                    placeholderTextColor="#FFE3E0"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ number1: parseInt(text) })} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="   Number2"
                    placeholderTextColor="#FFE3E0"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ number2: parseInt(text) })} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={

                        () => this.add(this.setState({ Answer: this.state.number1 + this.state.number2 }))}>

                    <View style={styles.button1}>
                        <Text style={styles.button}> Addition </Text>
                    </View>

                </TouchableOpacity>

                <View style={styles.s}>
                    <Image source={require('./sum.jpg')} style={styles.p}></Image>
                </View>

                <Text style={styles.name}>Parichat Kruetiaw </Text>
                <Text style={styles.a}> 6035512076  </Text>

            </View>
        )
    }
}
export default sum

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#00B9B9',
        flex: 1,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,

    },
    button1: {
        backgroundColor: '#71A0FF',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
        width: 80,
    },
    button: {
        color: '#FCFCFC',
        textAlign: 'center',
        alignItems: 'center',
    },
    font: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'normal',
        paddingTop: 30,
    },

    s: {
        alignItems: 'center',
        paddingTop: 20,
    },


    p: {
        alignItems: 'center',
        height: 160,
        width: 240,
    },

    name: {
        paddingTop: 70,
        color: '#000000',
        textAlign: 'right',
        fontSize: 15,


    },
    a: {
        paddingTop: 2,
        color: '#000000',
        textAlign: 'right',
        fontSize: 15,


    }
})