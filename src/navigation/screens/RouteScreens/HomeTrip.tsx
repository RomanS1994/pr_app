import { ScrollView, StyleSheet, View } from "react-native";
import Logo from "../../../components/logo";
import MainButton from "../../../components/mainButton";
import { useNavigation } from "@react-navigation/native";

export default function HomeTrip() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      <View style={styles.buttonsList}>
        <MainButton
          onPress={() =>
            navigation.navigate("My_Routes", { screen: "RouteHome" })
          }
          text="Airport Transfer"
        />
        <MainButton
          onPress={() =>
            navigation.navigate("My_Routes", { screen: "RouteHome" })
          }
          text="City Transfer"
        />
        <MainButton
          onPress={() =>
            navigation.navigate("My_Routes", { screen: "RouteHome" })
          }
          text="Hourly Booking"
        />
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
