import React, { Component } from "react";
import Header from "./src/components/Header";
import { View, Text } from "react-native";
import Post from "./src/components/Post";


export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Renato Cesar',
      comment: 'Top'
    }, {
      nickname: 'Joao Cesar',
      comment: 'tgdgdgd g',
    }]

    return (
      <View style={{ flex: 1 }}>
        <Header></Header>
        <Post image={require('./assets_lambe/assets/imgs/fence.jpg')}
          comments={comments}></Post>
      </View>
    )
  }
}