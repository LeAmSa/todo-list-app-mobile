import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#43446A",
    padding: 12,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#808080",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  completedContainer: {
    backgroundColor: "#333452",
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
  description: {
    color: "#fff",
  },
  completedDescription: {
    textDecorationLine: "line-through",
    color: "#fffa",
  },
  btnEdit: {
    marginRight: 8,
  },
});
