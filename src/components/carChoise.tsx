import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Users } from "lucide-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../theme/colors";

const images = {
  Van: require("../assets/images/cars/Van.png"),
  Standard: require("../assets/images/cars/Standard.png"),
  Business: require("../assets/images/cars/Business.png"),
  Comfort: require("../assets/images/cars/Comfort.png"),
};

export default function Car({ title, price, seats, suitcase, style }) {
  return (
    <TouchableOpacity style={[styles.car, style]}>
      <Image style={styles.photo} source={images[title]} />
      <View style={styles.wrapperDesc}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{price}</Text>
          </View>
          <View style={styles.descBox}>
            <Users size={14} color={colors.grey} />
            <Text>{seats} seats</Text>
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
      <Icon name="radio-button-unchecked" size={28} color={colors.accent} />
      {/* <Icon name="radio-button-checked" size={28} color="#DED47B" /> */}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
