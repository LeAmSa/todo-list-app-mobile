import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  btnCheck: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#808080",
    backgroundColor: "#fff",
  },
  btnCompleted: {
    backgroundColor: "#7FFF00",
  },
  completedDescription: {
    textDecorationLine: "line-through",
    color: "#fffa",
  },
  btnEdit: {
    marginRight: 8,
  },
});
