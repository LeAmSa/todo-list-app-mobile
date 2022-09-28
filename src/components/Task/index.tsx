import { View, Text, TouchableOpacity } from "react-native";
import { PencilSimple, TrashSimple } from "phosphor-react-native";

import { styles } from "./styles";

interface TaskProps {
  id?: string;
  title: string;
  completed?: boolean;
}

export function Task({ id, title, completed }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnCheck}></TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btnEdit}>
          <PencilSimple size={20} color="#f7f3f3" />
        </TouchableOpacity>

        <TouchableOpacity>
          <TrashSimple size={20} color="#f1524a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
