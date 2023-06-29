import React, { useState } from "react"
import {
    Alert,
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity
} from "react-native";
import useEffectIf from "../hooks/UseEffectIf";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import useFeed from '../data/hooks/useFeed'
import useUser from '../data/hooks/useUser'
import useEvent from '../data/hooks/useEvent';

export default props => {
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')

    const { addPost } = useFeed()
    const { name: nickname, email } = useUser()
    const { uploading } = useEvent()

    const canEdit = () => (email != null && email.trim() != '') && !uploading

    const pickImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.assets[0].uri, base64: res.assets[0].base64 })
            }

        })
    }

    /*     const pickPhoto = () => {
            launchCamera({
                mediaType: 'photo',
                includeBase64: true,
                saveToPhotos: true,
                maxHeight: 600,
                maxWidth: 800
            }, res => {
                if (!res.didCancel) {
                    setImage({ uri: res.assets[0].uri, base64: res.assets[0].base64 })
                }
            })
        } */

    const save = () => {
        addPost({
            id: Math.random(),
            nickname,
            email,
            image: image ? image : null,
            comments: [{ nickname, comment }]
        })
    }

    useEffectIf(() => {
        setImage(null)
        setComment('')
        props.navigation.navigate('Feed')
    }, uploading, false)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={image ? image : null} style={styles.image} />
                </View>
                <View style={styles.buttomRow}>
                    {/* <TouchableOpacity onPress={pickPhoto} disabled={!canEdit()}
                            style={[styles.buttom, canEdit()? {}: styles.buttomDisabled]}>
                        <Text style={styles.buttomText}>Tirar uma foto</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={pickImage} disabled={!canEdit()}
                        style={[styles.buttom, canEdit() ? {} : styles.buttomDisabled]}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.legenda}>
                    <TextInput
                        placeholder='Qual a Legenda ?'
                        style={styles.input}
                        value={comment}
                        onChangeText={setComment}
                        editable={canEdit()}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={save} disabled={!canEdit()}
                    style={[styles.buttom, canEdit() ? {} : styles.buttomDisabled]} >
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000'

    },
    TextInput: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#0195f7',
        borderRadius: 10,
        color: '#FFF',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
        color: '#FFF',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttomRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    buttom: {
        backgroundColor: '#0195f7',
        width: '84%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
        borderRadius: 10,
    },
    input: {
        marginTop: 20,
        width: '90%',
        color: '#FFF',
    },
    buttomDisabled: {
        backgroundColor: '#666'
    },
    legenda: {
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        color: '#F8F8FF',
        borderRadius: 10,
    }

})