import { ScrollView, StyleSheet, Text, View } from "react-native";
import Logo from "../../../components/logo";
import MainButton from "../../../components/mainButton";
import { useContext } from "react";
import { ThemeContext } from "../../../js/ThemeContext";
import { THEME_COLORS } from "../../../theme/themeColors";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = THEME_COLORS[theme];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Logo />

      <View style={styles.buttonsList}>
        <MainButton text="Home" />
      </View>
      <MainButton
        style={{ position: "absolute", top: 60, right: 40 }}
        text={theme}
        onPress={toggleTheme}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 26,

    paddingVertical: 40,
  },
  title: {
    color: "blue",
  },
  buttonsList: {
    gap: 36,
    alignItems: "center",
  },
});
