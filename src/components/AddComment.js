import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableNativeFeedback, Alert } from "react-native";
import Close from "../../src/icons/x.svg"
import Comment from "../../src/icons/commentlinear_106230.svg"



class AddComment extends Component {
    state = {
        comment: '',
        aslComment: false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Comente"
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}></TextInput>
                    <TouchableNativeFeedback onPress={() => this.setState({ editMode: false })}>
                        <Close width='20' height="20" > </Close>
                    </TouchableNativeFeedback>
                </View>
            )
        } else {
            commentArea = (
                <TouchableNativeFeedback onPress={() => this.setState({ editMode: true })}>
                    <View>
                    <Comment width='20' height="20" fill='#000'> </Comment>
                        <Text style={styles.caption}>Digite um coméntario..</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
        return (
            <View style={{ flex: 1 }}>{commentArea}</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '80%'
    }
})

export default AddComment