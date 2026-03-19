import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.item}>
        <Text>Staff Conversations</Text>
        <Text style={styles.count}>1</Text>
      </View>
      <View style={styles.item}>
        <Text>Sent Messages</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, textAlign: "center", marginBottom: 20 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  count: { color: "blue" }
});
