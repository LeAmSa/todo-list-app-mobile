import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
  switchThemeContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  addTaskContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    width: "90%",
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

//usando o styled component
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 30px 30px 30px 30px;
`;
