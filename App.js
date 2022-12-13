import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Task from "./components/Task"
import Footer from "./components/Footer"
import { useState } from 'react';

const TASK_DATA = [
  {
    title: "Like 👍",
    isDone: false
  },
  {
    title: "Comment 📢",
    isDone: false
  },
  {
    title: "Subscribe 🙃",
    isDone: false
  },
]

// filter, find, map, reduce, sort, every, flatten

export default function App() {
  const [tasks, setTasks] = useState(TASK_DATA);
  const [title, setTitle] = useState("");
  
  console.log("tasks", tasks)
  const onPress = () => {
    if (title !== "") {
      setTasks(prev => [
        ...prev,
        {
          title: title,
          isDone: false
        }
      ])
      setTitle("");
    } else {
      console.log("title is empty")
    }
  };

  const onChangeText = (text) => {
    setTitle(text);
  }

  const onComplete = (title, complete) => {
    
  }

  return (
    <>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Today's Tasks</Text>
          {
            tasks.map((task, index) => (
              <Task title={task.title} key={index} onComplete={onComplete} />
            ))
          }
        </View>
      </ScrollView>
      <Footer onPress={onPress} onChangeText={onChangeText} title={title} />
    </>
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
    paddingHorizontal: 20,
  },
  headerText: {
    width: "100%",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  }
});