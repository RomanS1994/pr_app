import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import InputSearchAddress from "../../../components/inputSearchAdress";
import SecondaryButton from "../../../components/secondaryButton";
import { useState } from "react";
const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
// import { geocodeAddress } from "../../../maps/maps";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export default function RouteHome() {
  const navigation = useNavigation();

  const [pickUpAdres, setpickUpAddres] = useState("");
  const [dropOffAddres, setDropOffAddres] = useState("");
  const [distance, setDistance] = useState("");
  const [pickUpCoords, setPickUpCoords] = useState<Coordinates | null>(null);
  const [dropOffCoords, setDropOffCoords] = useState<Coordinates | null>(null);
  const [region, setRegion] = useState({
    latitude: 50.0755,
    longitude: 14.4378,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const goNext = () => {
    if (!pickUpAdres.trim() || !dropOffAddres.trim()) {
      Alert.alert("Заповніть обидві адреси");
      return;
    }
    navigation.navigate("ChooseCar", { pickUpAdres, dropOffAddres, distance });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        region={region}
      >
        {pickUpCoords && <Marker coordinate={pickUpCoords} title="Pick-up" />}
        {dropOffCoords && (
          <Marker coordinate={dropOffCoords} title="Drop-off" />
        )}

        {pickUpCoords && dropOffCoords && (
          <MapViewDirections
            origin={pickUpCoords}
            destination={dropOffCoords}
            apikey={API_KEY ?? ""}
            strokeWidth={3}
            strokeColor="#DED47B"
            onReady={(result) => {
              setDistance(result.distance);
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);
            }}
          />
        )}
      </MapView>
      <View style={styles.box}>
        <View style={styles.inputWrapper}>
          <InputSearchAddress
            setCoords={setPickUpCoords}
            onChangeText={setpickUpAddres}
            text={"Pick-up adress"}
            wrapperStyle={{ zIndex: 2 }}
          ></InputSearchAddress>
          <InputSearchAddress
            setCoords={setDropOffCoords}
            onChangeText={setDropOffAddres}
            text={"Dropp-off adress"}
            wrapperStyle={{ zIndex: 1 }}
          ></InputSearchAddress>
        </View>

        <SecondaryButton
          style={{ backgroundColor: "red" }}
          onPress={() => goNext()}
          text="Next Step"
        ></SecondaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    marginTop: 34,

    gap: 24,

    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  inputWrapper: {
    gap: 12,
  },
});
