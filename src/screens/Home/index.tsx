import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "../../components/Task";
import { Plus } from "phosphor-react-native";
import { SnackBarComponent } from "../../components/SnackBarComponent";

import { styles } from "./styles";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export interface TaskObj {
  id: string;
  description: string;
  completed: boolean;
}

export function Home() {
  const [task, setTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<TaskObj[]>([]);

  const [visible, setVisible] = useState<boolean>(false);
  const [snackText, setSnackText] = useState<string>("");

  //SnackBar functions
  const onToggleSnackbar = (text: string) => {
    setVisible(!visible);
    setSnackText(text);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  //Read data from firebase
  useEffect(() => {
    const q = query(collection(db, "Tasks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArray: TaskObj[] = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({
          ...tasksArray,
          id: doc.id,
          description: doc.data().description,
          completed: doc.data().completed,
        });
      });
      setListTasks(tasksArray);
    });
    return () => unsubscribe();
  }, []);

  //Create data
  const createTask = async (task: string) => {
    if (task === "") {
      alert("Certifique-se de digitar uma task.");
      return;
    }
    await addDoc(collection(db, "Tasks"), {
      description: task,
      completed: false,
    });
    onToggleSnackbar("Task criada com sucesso!");
  };

  //Update data
  const handleToggleComplete = async (task: TaskObj) => {
    await updateDoc(doc(db, "Tasks", task.id), {
      completed: !task.completed,
    });
  };

  //Delete data
  const handleDeleteTask = async (id: string) => {
    await deleteDoc(doc(db, "Tasks", id));
    onToggleSnackbar("Task deletada com sucesso!");
  };

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
          onPress={() => createTask(task)}
        >
          <Plus color="#fff" size={12} weight="bold" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={listTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item}
            handleToggleComplete={() => handleToggleComplete(item)}
            handleDeleteTask={() => handleDeleteTask(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />

      <SnackBarComponent
        text={snackText}
        visible={visible}
        onDismissSnackBar={onDismissSnackBar}
      />
    </SafeAreaView>
  );
}

/*
  Próximos passos:
  - Estudar sobre context para aplicar o tema claro/escuro
  - Fazer autenticação de usuário e mostrar o username e imagem do perfil (qualquer login)
*/
