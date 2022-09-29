import { Snackbar } from "react-native-paper";

interface SnackProps {
  text: string;
  visible: boolean;
  onDismissSnackBar: () => void;
}

export function SnackBarComponent({
  text,
  visible,
  onDismissSnackBar,
}: SnackProps) {
  return (
    <Snackbar
      visible={visible}
      style={{ backgroundColor: "#3C79B0" }}
      onDismiss={onDismissSnackBar}
      duration={3000}
      action={{
        label: "Ok",
        onPress: () => {
          onDismissSnackBar();
        },
      }}
    >
      {text}
    </Snackbar>
  );
}
