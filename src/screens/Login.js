import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

import useUser from "../data/hooks/useUser"

export default props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.input}
                autoFocus={true} keyboardType='email-address'
                value={email} onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password}
                onChangeText={setPassword} />
            <TouchableOpacity onPress={() => login(email, password)} style={styles.buttom}>
                <Text style={styles.buttomText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Register')}} style={styles.buttom}>
                <Text style={styles.buttomText}>Criar nova conta...</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
        
        
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#0195f7',
        borderRadius: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#F8F8FF',
        borderRadius: 10,
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#333',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        color: '#F8F8FF',
        borderRadius: 10,
    }
})