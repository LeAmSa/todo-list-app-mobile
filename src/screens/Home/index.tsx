import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import { Task } from "../../components/Task";
import { Plus, Moon, Sun } from "phosphor-react-native";
import { SnackBarComponent } from "../../components/SnackBarComponent";

import { Container, styles } from "./styles";
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
import { useTheme } from "styled-components/native";

import { ThemeContext, ThemeType } from "../../themes/Theme";

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

  //acessando o objeto que contém as cores do styled components
  const { colors } = useTheme();

  //SnackBar functions
  const onToggleSnackbar = (text: string) => {
    setVisible(!visible);
    setSnackText(text);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  //Switch theme functions
  const { toggleTheme, theme } = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;

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
    <Container>
      <View style={styles.switchThemeContainer}>
        <Moon
          style={{ transform: [{ translateX: 6 }] }}
          size={18}
          color={isDarkMode ? "#fff" : "#121212"}
        />
        <Switch
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          value={!isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#12121258", true: "#e9c16b" }}
          thumbColor={isDarkMode ? "#fff" : "#e6af39"}
        />
        <Sun
          style={{ transform: [{ translateX: -6 }] }}
          size={18}
          color="#e6af39"
        />
      </View>

      <View style={styles.addTaskContainer}>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: colors.inputBackground,
              color: colors.onBackground,
            },
          ]}
          placeholder="Adicione uma tarefa"
          placeholderTextColor={colors.inputPlaceholder}
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
    </Container>
  );
}

// Próximos passos:
// - Estudar sobre context para aplicar o tema claro/escuro
// - Fazer autenticação de usuário e mostrar o username e imagem do perfil (qualquer login)

// TEMA LIGHT:
// - Home backgroundColor: #fff
// - Input backgroundColor: #d5e5f1
// -Input text color: #121212
// - Task description color: #9C9AA5
// - Task container backgroundColor: #FFFFFF
//#cecece

//Continuar vídeo no min 30:29
