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
                <Text style={styles.buttomText}> Entrar </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Register')}} style={styles.buttom}>
                <Text style={styles.buttomText}> Criar nova conta... </Text>
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
        backgroundColor: '#0195f7',
        width: '84%',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
       
    },
    buttomText: {
        marginTop: 20,
        width: '90%',
        fontSize: 20,
        color: '#F8F8FF',
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input: {
        backgroundColor: '#3a3a3a',
        width: '84%',
        height: 50,
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 8,
        paddingRight: 6,
        marginBottom: 20,
    }
})  