import { StyleSheet, TextInput, View } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import colors from "../theme/colors";
import { useState } from "react";

export default function InputSearchAdress({ text, value, onChangeText }) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={22}
        color={focused ? colors.accent : colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder={text}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.10);",
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 62,
  },
  input: {
    width: "100%",
    fontSize: 14,
    color: "black",
  },
});
