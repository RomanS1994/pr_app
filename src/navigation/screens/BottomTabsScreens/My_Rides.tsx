import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

export function My_Routes() {
  return (
    <View style={styles.container}>
      <Text>My-Routes Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
