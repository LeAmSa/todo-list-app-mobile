import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task, TaskProps } from "../../components/Task";
import { Plus } from "phosphor-react-native";

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

      {listTasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleToggleComplete={() => handleToggleComplete(task)}
            handleDeleteTask={() => handleDeleteTask(task.id)}
          />
        );
      })}
    </SafeAreaView>
  );
}

/*
  Próximos passos:
  - Habilitar um modal que permita editar a description da task
  - Utilizar um component de alguma biblioteca que avise que a task foi criada/deletada
  - Estudar sobre context para aplicar o tema claro/escuro
  - Fazer autenticação de usuário e mostrar o username e imagem do perfil (qualquer login)
  - CRIAR O ARQUIVO ENV ANTES DE SUBIR NO GITHUB
*/
