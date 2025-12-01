import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/images/white-logo.png")}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
