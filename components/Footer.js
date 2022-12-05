import { StyleSheet, View, Text, TextInput } from "react-native";


export default function Footer() {
    return (
        <View style={styles.box}>
         <TextInput  style={styles.Input}  placeholder="Write a task"/>
        <View style={styles.button}> 
            <Text style={styles.Text}>+</Text>
        </View>
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

 
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 245
        
    },
    Input: {
        backgroundColor: "#fff",
        width: 246,
        height: 45,
        borderRadius: 60,
        shadowColor: "rgba(0, 0, 0, 0.15)",
        marginTop: 5,
        textAlign: "center",
        padding: 10
        
    },
    button:{
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 53,
        height: 60,
        width: 60,
        justifyContent:"center"
    },
    Text: {
        fontSize: 35,
        color: "rgba(192, 192, 192, 1)",
        
        
    }
 
  
})