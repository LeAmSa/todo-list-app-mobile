import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "../../components/Task";
import { Plus } from "phosphor-react-native";

import { styles } from "./styles";

export function Home() {
  const [task, setTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<string[]>([]);

  function AddNewTask(task: string) {
    setListTasks([...listTasks, task]);
    console.log(listTasks);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#ffffff78"
          onChangeText={(newTask) => setTask(newTask)}
          defaultValue={task}
        />
        <TouchableOpacity
          style={styles.btnAddTask}
          onPress={() => AddNewTask(task)}
        >
          <Plus color="#fff" size={12} weight="bold" />
        </TouchableOpacity>
      </View>

      <Task title={task} />
    </SafeAreaView>
  );
}
