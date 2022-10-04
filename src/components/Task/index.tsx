import { View, Text, TouchableOpacity } from "react-native";
import { TrashSimple, Check } from "phosphor-react-native";

import { styles } from "./styles";
import { TaskObj } from "../../screens/Home";
import { useTheme } from "styled-components/native";

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
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.taskBackground, borderColor: colors.border },
        task.completed
          ? { backgroundColor: colors.completedBgTask }
          : styles.container,
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
          task.completed
            ? styles.completedDescription
            : { color: colors.onBackground },
        ]}
      >
        {task.description}
      </Text>

      <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
        <TrashSimple size={20} color="#f1524a" />
      </TouchableOpacity>
    </View>
  );
}
