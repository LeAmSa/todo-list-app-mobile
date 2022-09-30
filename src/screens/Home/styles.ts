import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#31315C",
    padding: 30,
  },
  addTaskContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    width: "90%",
    backgroundColor: "#272851",
    color: "#fff",
    paddingVertical: 8,
    paddingLeft: 16,
    marginRight: 10,
    borderRadius: 50,
  },
  btnAddTask: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C79B0",
  },
  contentList: {
    paddingTop: 16,
    paddingBottom: 64,
  },
});
