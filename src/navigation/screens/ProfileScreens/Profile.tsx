import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import SecondaryButton from "../../../components/secondaryButton";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>

      <SecondaryButton
        text="See API list"
        onPress={() => navigation.navigate("TransfersList")}
      />
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
