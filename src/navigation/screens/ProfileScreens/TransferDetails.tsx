import { StyleSheet, Text, View } from "react-native";

export default function TransferDetails({ route }) {
  const { item } = route.params;

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Немає даних </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
});
