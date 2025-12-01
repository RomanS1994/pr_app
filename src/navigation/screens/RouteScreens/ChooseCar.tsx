import { Text } from "@react-navigation/elements";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import colors from "../../../theme/colors";
import fonts from "../../../theme/fonts";
import Car from "../../../components/carChoise";
import MainButton from "../../../components/mainButton";
import SecondaryButton from "../../../components/secondaryButton";
import { useNavigation } from "@react-navigation/native";

export default function ChooseCar({ route }) {
  const navigation = useNavigation();

  const { pickUpAdres, dropOffAddres } = route?.params ?? {};

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Where are you going today?</Text>
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 32 }}>
        <Image source={require("../../../assets/images/card/stepper.png")} />
        <View>
          <View style={{ gap: 4, marginBottom: "auto" }}>
            <Text style={styles.infoDescription}> Pick-up </Text>
            <Text style={styles.infoLocation}>{pickUpAdres}</Text>
          </View>
          <View style={{ gap: 4 }}>
            <Text style={styles.infoDescription}> Drop off </Text>
            <Text style={styles.infoLocation}>{dropOffAddres}</Text>
          </View>
        </View>
      </View>
      <View style={{ gap: 12, marginBottom: 32 }}>
        <Car title="Standard" price="$1.99" suitcase="2" seats="4"></Car>
        <Car title="Comfort" price="$1.99" suitcase="2" seats="4"></Car>
        <Car title="Business" price="$1.99" suitcase="2" seats="4"></Car>
        <Car title="Van" price="$1.99" suitcase="2" seats="4"></Car>
      </View>

      <View style={styles.buttonWrapper}>
        <MainButton
          style={{ flex: 1 }}
          text={"Back"}
          onPress={() => navigation.navigate("RouteHome")}
        ></MainButton>
        <SecondaryButton
          style={{ flex: 1 }}
          text={"Next Step"}
          onPress={() => navigation.navigate("Payment")}
        ></SecondaryButton>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    padding: 16,
    paddingTop: 86,

    justifyContent: "flex-end",
  },
  title: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: "auto",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 8,
    width: "auto",
  },
  infoDescription: {
    color: colors.grey,
    fontSize: 14,
  },
  infoLocation: {
    color: colors.black,
    fontWeight: 700,
  },
});
