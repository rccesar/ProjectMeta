import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import icon from '../../assets_lambe/assets/imgs/icon.png'

class Header extends Component {
    render() {
        <View style={styles.container}>

            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image}></Image>
                <Text style={styles.title}>Meta Money</Text>

            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title:{
        color: '#000',
        fontFamily:'shelter',
        height: 30,
        fontSize: 28,

    }
})


export default Header
