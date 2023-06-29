import React from "react"

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

import useUser from "../data/hooks/useUser"

export default props => {
    const { name, email, logout } = useUser()

    const options = { email, secure: true }
    return (
        <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <TouchableOpacity onPress={logout}
                style={styles.buttom}>
                <Text style={styles.buttomText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000'
        
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#444',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
        color: '#444',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
        
    }
})