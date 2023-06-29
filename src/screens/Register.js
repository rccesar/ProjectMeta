import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

import useUser from '../data/hooks/useUser'

export default props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { createUser } = useUser()

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={name} onChangeText={setName} />
            <TextInput placeholder='Email' style={styles.input} value={email}
                keyboardType='email-address' onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => createUser({name, email, password})} style={styles.buttom}>
                <Text style={styles.buttomText}>Registrar</Text>
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
        marginTop: 20,
        width: '90%',
        backgroundColor: '#4286f4'      ,
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        color: '#F8F8FF',
        borderRadius: 10,
    },
    buttomText: {
       
        fontSize: 20,
        color: '#FFF',
        borderRadius: 10,
        textAlign: 'center',
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

