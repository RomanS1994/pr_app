import { useNavigation } from "@react-navigation/native";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import InputSearchAdress from "../../../components/inputSearchAdress";
import SecondaryButton from "../../../components/secondaryButton";
import { useState } from "react";

export default function RouteHome() {
  const navigation = useNavigation();

  const [pickUpAdres, setpickUpAddres] = useState("");
  const [dropOffAddres, setDropOffAddres] = useState("");

  const goNext = () => {
    if (!pickUpAdres.trim() || !dropOffAddres.trim()) {
      Alert.alert("Заповніть обидві адреси");
      return;
    }
    navigation.navigate("ChooseCar", { pickUpAdres, dropOffAddres });
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/map.png")}
      style={styles.container}
    >
      <View style={styles.box}>
        <View style={styles.inputWrapper}>
          <InputSearchAdress
            value={pickUpAdres}
            onChangeText={setpickUpAddres}
            text={"Pick-up adress"}
          ></InputSearchAdress>
          <InputSearchAdress
            value={dropOffAddres}
            onChangeText={setDropOffAddres}
            text={"Dropp-off adress"}
          ></InputSearchAdress>
        </View>
        <SecondaryButton
          style={{ backgroundColor: "red" }}
          onPress={() => goNext()}
          text="Next Step"
        ></SecondaryButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",

    height: "100%",
  },

  box: {
    backgroundColor: "white",
    gap: 24,

    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  inputWrapper: {
    gap: 12,
  },
});
