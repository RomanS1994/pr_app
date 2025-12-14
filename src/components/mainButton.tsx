import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME_COLORS } from "../theme/themeColors";
import { useContext } from "react";
import { ThemeContext } from "../js/ThemeContext";

export default function MainButton({ text, style, onPress }) {
  const { theme } = useContext(ThemeContext);
  const colors = THEME_COLORS[theme];

  return (
    <TouchableOpacity
      style={[style, styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
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
    borderWidth: 1,
    borderColor: "#DED47B",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
