import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../theme/colors";
import {
  CARS_PRICE_BOARDING,
  CARS_PRICE_KM,
  EXCHANGE_RATES,
} from "../js/Prices";
import React, { useMemo } from "react";

const images = {
  Van: require("../assets/images/cars/Van.png"),
  Standard: require("../assets/images/cars/Standard.png"),
  Business: require("../assets/images/cars/Business.png"),
  Comfort: require("../assets/images/cars/Comfort.png"),
};

type CarProps = {
  title: "Standard" | "Comfort" | "Business" | "Van";
  distance?: number | null;
  seats: string | number;
  suitcase: string | number;
  style?: any;
  selected: boolean;
  onSelect?: (title: CarProps["title"]) => void;
};

function Car({
  title,
  seats,
  suitcase,
  style,
  selected,
  onSelect,
  distance = 0,
}: CarProps) {
  const price = useMemo(() => {
    return Math.round(
      (CARS_PRICE_BOARDING[title] + CARS_PRICE_KM[title] * distance) /
        EXCHANGE_RATES["EUR"]
    );
  }, [title, distance]);

  return (
    <TouchableOpacity
      onPress={() => onSelect(title)}
      style={[styles.car, selected && styles.carSelected, style]}
    >
      <Image style={styles.photo} source={images[title]} />
      <View style={styles.wrapperDesc}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>${price}</Text>
          </View>
          <View style={styles.descBox}>
            <View style={styles.descBox}>
              <MaterialCommunityIcons
                name="account-multiple-outline"
                size={14}
                color={colors.grey}
              />
              <Text>{seats} seats</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <MaterialCommunityIcons
              name="bag-suitcase-outline"
              size={14}
              color={colors.grey}
            />

            <Text>{suitcase} suitcase</Text>
          </View>
        </View>
      </View>
      <MaterialIcons
        name={selected ? "radio-button-checked" : "radio-button-unchecked"}
        size={28}
        color={colors.accent}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carSelected: {
    height: 72,
    backgroundColor: "rgba(222, 212, 123, 0.15)",
  },

  car: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,

    width: "100%",
    height: 68,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DED47B",
  },

  descBox: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  photo: {
    width: 82,
    height: 42,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
    gap: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  details: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  wrapperDesc: {
    marginRight: "auto",
  },

  price: { fontSize: 16 },
  minutes: { fontSize: 16 },
  seats: { fontSize: 16 },
});

const MemoCar = React.memo(Car);
(MemoCar as any).whyDidYouRender = true;
export default MemoCar;
