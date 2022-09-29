import { View, Text, TouchableOpacity } from "react-native";
import { PencilSimple, TrashSimple, Check } from "phosphor-react-native";

import { styles } from "./styles";
import { TaskObj } from "../../screens/Home";

export interface TaskProps {
  task: TaskObj;
  handleToggleComplete: (task: TaskObj) => void;
  handleDeleteTask: (id: string) => void;
}

export function Task({
  task,
  handleToggleComplete,
  handleDeleteTask,
}: TaskProps) {
  return (
    <View
      style={[
        styles.container,
        task.completed ? styles.completedContainer : styles.container,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.btnCheck,
          task.completed ? styles.btnCompleted : styles.btnCheck,
        ]}
        onPress={() => handleToggleComplete(task)}
      >
        {task.completed ? <Check size={14} weight="bold" color="#fff" /> : ""}
      </TouchableOpacity>

      <Text
        style={[
          styles.description,
          task.completed ? styles.completedDescription : styles.description,
        ]}
      >
        {task.description}
      </Text>

      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btnEdit}>
          <PencilSimple size={20} color="#f7f3f3" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
          <TrashSimple size={20} color="#f1524a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
