import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Task from "./components/Task"
import Task1 from "./components/Task1"
import Task2 from "./components/Task2"
import Footer from "./components/Footer"

export default function App() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Today's Tasks</Text>
        <Task />
        <Task1 />
        <Task2 />
        <Footer />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 94,
    paddingHorizontal: 20
  },
  headerText: {
    width: "100%",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  }
});