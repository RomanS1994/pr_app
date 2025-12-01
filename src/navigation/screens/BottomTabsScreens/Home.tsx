import { ScrollView, StyleSheet, View } from "react-native";
import Logo from "../../../components/logo";
import MainButton from "../../../components/mainButton";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      <View style={styles.buttonsList}>
        <MainButton text="Home" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 26,

    backgroundColor: "#fff",
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
