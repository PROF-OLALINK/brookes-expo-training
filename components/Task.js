import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


    
export default function Task({title, complete, onComplete }) {
    const handlePress = () => {
        onComplete(title, !complete)
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={[styles.square, complete && styles.squareCompleted]} />
                <Text style={
                    complete && {
                        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                    }
                }>{title}</Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
                <View  style={[styles.checkbox, complete && styles.squareCompleted]}/>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 53,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 20
    },
    square: {
        backgroundColor: "rgba(85, 188, 246, 0.4);",
        height: 24,
        width: 24,
        marginRight: 15,
        borderRadius: 5
    },
    squareCompleted: {
        backgroundColor: "green"
    },
    checkbox: {
        borderWidth: 2,
        borderColor: "#55BCF6",
        height: 12,
        width: 12,
        borderRadius: 5
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center"
    }
})