import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchTransfers } from "../../../api/transfersApi";
import colors from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function TransfersList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchTransfers();
        setData(result.slice(0, 20));
      } catch (e) {
        console.log(e.message);
        setError("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("TransferDetails", { item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.body}>
            {item.body}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.grey,
  },
  title: {
    fontWeight: "700",
    marginBottom: 4,
  },
  body: {
    color: colors.grey,
  },
});
