import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import SecondaryButton from "../../../components/secondaryButton";
import { useNavigation } from "@react-navigation/native";

export default function Success() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Success Screen</Text>

      <SecondaryButton
        style={{ flex: 1 }}
        text={"Next Step"}
        onPress={() => navigation.navigate("HomeTrip")}
      ></SecondaryButton>
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
