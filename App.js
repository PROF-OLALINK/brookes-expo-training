import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Task from "./components/Task"
import Footer from "./components/Footer"
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// filter, find, map, reduce, sort, every, flatten

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const stringifiedTask = await AsyncStorage.getItem('@tasks')
      if(stringifiedTask !== null) {
        // value previously stored
        const savedData = JSON.parse(stringifiedTask)
        setTasks(savedData);
      } else {
        setTasks(TASK_DATA)
      }
    } catch(e) {
      // error reading value
    }
  }
  
  

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@tasks', value)
    } catch (e) {
      console.log("an error occured: ", e)
    }
  }
  

  const onPress = () => {
    if (title !== "") {
      const newTask = [
        ...tasks,
        {
          title: title,
          isDone: false
        }
      ]

      const doneTasks = newTask.filter(task => task.isDone);
      const notDoneTasks = newTask.filter(tasks => !tasks.isDone);
      const sortedTasks = [
        ...notDoneTasks,
        ...doneTasks
      ]
      setTasks(sortedTasks);

      const stringifiedTask = JSON.stringify(sortedTasks)
      // setTasks(newTask)
      storeData(stringifiedTask);
      setTitle("");
    } else {
      console.log("title is empty")
    }
  };

  const onChangeText = (text) => {
    setTitle(text);
  }

  const onComplete = (title, complete) => {
    const newTask = tasks.map(task => {
      if (task.title === title) {
        task.isDone = complete
        return task
      }
      return task
    })

    const doneTasks = newTask.filter(task => task.isDone);
    const notDoneTasks = newTask.filter(tasks => !tasks.isDone);

    const sortedTasks = [
      ...notDoneTasks,
      ...doneTasks
    ]
    setTasks(sortedTasks);

    const stringifiedTask = JSON.stringify(sortedTasks)
      storeData(stringifiedTask);
  }

  return (
    <>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Today's Tasks</Text>
          <FlatList data={tasks} renderItem={({item, index}) => <Task title={item.title} complete={item.isDone} key={index} onComplete={onComplete} /> }/>
          {/* {
            tasks.map((task, index) => (
              <Task title={task.title} key={index} onComplete={onComplete} />
            ))
          } */}
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