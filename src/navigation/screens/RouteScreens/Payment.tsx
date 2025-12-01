import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import MainButton from "../../../components/mainButton";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../../../components/secondaryButton";

export default function Payment() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Payment Screen</Text>

      <View style={styles.buttonWrapper}>
        <MainButton
          style={{ flex: 1 }}
          text={"Back"}
          onPress={() => navigation.navigate("ChooseCar")}
        ></MainButton>
        <SecondaryButton
          style={{ flex: 1 }}
          text={"Confirm Pay"}
          onPress={() => navigation.navigate("Success")}
        ></SecondaryButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonWrapper: {
    flexDirection: "row",
    gap: 8,
    width: "auto",
  },
});
