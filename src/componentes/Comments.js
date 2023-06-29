import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default props => {
    let view = null
    if(props.comments) {
        view = props.comments.map((item, index) => {
            return (
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.nickname}>{item.nickname}: </Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            {view}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#FFFFE0'
    },
    comment: {
        color: '#F8F8FF'
    }
})