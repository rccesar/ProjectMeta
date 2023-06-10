import React, { Component } from "react";
import { StyleSheet,View,Text,TextInput,TouchableNativeFeedback ,Alert} from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

class AddComment extends Component {
    state = {
        comment:'',
        aslComment: false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment)
    }

    render(){
        let commentArea=null
        if (this.state.editMode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Comente"
                    style={styles.input} autoFocus={true}
                    value={this.state.comment}
                    onChangeText={comment => this.setState({comment})}
                    onSubmitEditing={this.handleAddComment}></TextInput>
                <TouchableNativeFeedback onPress={()=> this.setState({editMode:false})}>
                    <Icon name="times" size={15} color='#555'></Icon>
                </TouchableNativeFeedback>
                </View>
            )
        } else {
            commentArea=(
                <TouchableNativeFeedback onPress={()=> this.setState({editMode: true})}>
                <View>
                    <Icon name="comment" size={25} color='#555'></Icon>
                    <Text style={styles.caption}>Digite um coméntario..</Text>
                </View>
                </TouchableNativeFeedback>
            )
        }
        return(
            <View style={{flex:1}}>{commentArea}</View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin: 10,
    },
    caption:{
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input:{
        width: '90%'
    }
})

export default AddComment