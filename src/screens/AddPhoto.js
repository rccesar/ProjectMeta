import React, { Component } from "react";
import { StyleSheet,View,TouchableOpacity,TextInput,Image,Dimensions,Platform,ScrollView,Alert } from "react-native";

class AddPhoto extends Component {
    state ={
        image: null,
        comment: '',
    }
    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a Imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel){
                this.setState({image: {uri: res.uri,base64: res.date}})
            } 

        })
    }
    save = async () => {
        Alert.alert('Imagem Adicionada', this.state.comment)
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
            <Text style={styles.title}>Compartilhe uma imagem</Text>
            <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image}></Image>
            </View>
            <TouchableOpacity onPress={this.pickImage}></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}