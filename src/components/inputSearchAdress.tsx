import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";
import { useState } from "react";

export default function InputSearchAddress({
  setCoords,
  text,
  onChangeText,
  wrapperStyle,
}) {
  const [focused, setFocused] = useState(false);
  const [showList, setShowList] = useState(false);

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.container}>
        <Feather
          name="search"
          size={22}
          color={focused ? colors.accent : colors.grey}
        />

        <GooglePlacesAutocomplete
          placeholder={text}
          onPress={(data, details = null) => {
            // ✅ координати з details
            const location = details?.geometry?.location;
            if (location) {
              const { lat, lng } = location;
              setCoords({
                latitude: lat,
                longitude: lng,
              });
            }

            onChangeText(data.description);
            setShowList(false);
            setFocused(false);
          }}
          query={{
            key: API_KEY,
            language: "en",
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          keyboardShouldPersistTaps="always"
          textInputProps={{
            onFocus: () => {
              setFocused(true);
              setShowList(true);
            },
            onBlur: () => {
              // setFocused(false);
              // setShowList(false);
            },
            placeholderTextColor: "grey",
          }}
          styles={{
            container: styles.autoContainer,
            textInput: styles.input,
            listView: [
              styles.listView,
              { display: showList ? "flex" : "none" },
            ],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
    elevation: 999,
    position: "relative",
  },
  placecholder: {
    color: "black",
  },
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 52,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  autoContainer: {
    zIndex: 999,
    flex: 1,
  },
  input: {
    fontSize: 14,
    color: "black",
    width: "100%",
  },
  listView: {
    position: "absolute",
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 8,
    zIndex: 9999,
    elevation: 10,
  },
});
