import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Footer({ onPress, onChangeText, title }) {
  return (
    <View style={styles.box}>
      <TextInput style={styles.Input} placeholder="Write a task" onChangeText={onChangeText}  value={title} />
      <View
        style={{
          width: 20,
          height: 1,
        }}
      />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.Text}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 37,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  Input: {
    backgroundColor: "#fff",
    width: 246,
    height: 45,
    borderRadius: 60,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 53,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 35,
    color: "rgba(192, 192, 192, 1)",
  },
});
