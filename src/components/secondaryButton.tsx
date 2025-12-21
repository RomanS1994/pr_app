import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SecondaryButton({ text, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    height: 48,
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: "#DED47B",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
