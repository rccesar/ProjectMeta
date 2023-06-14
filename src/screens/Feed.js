import React, { Component } from "react";
import { StyleSheet, FlatList, View  } from "react-native";
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Carolina',
            email: 'carolina@gmail.com',
            image: require('../../assets_lambe/assets/imgs/fence.jpg'),
            commets: [{
                nickname: 'Renato',
                comment: 'Lindaa'
            }, {
                nickname: 'Ana Julia',
                comment: 'Linda foto'
            
            }]
        },{
            
            id: Math.random(),
            nickname: 'Jonatas',
            email: 'jonatas@gmail.com',
            image: require('../../assets_lambe/assets/imgs/bw.jpg'),
            commets: []
        }]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header></Header>
                <FlatList
                data={this.state.posts}
                keyExtractor={item=> `${item.id}`}
                renderItem={({item}) => 
                <Post key={item.id}{...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'

    }
})

export default Feed