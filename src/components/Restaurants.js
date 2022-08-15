import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";

export default function Restaurnats() {
  const [{ data, loading, error }, searchRestaurants] = useState();

  searchRestaurants("Dessert");

  return (
    <View stlye={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorzontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
