import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.main}>You have 19 new Circulars</Text>
      <Text>Tap here to view them</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 20 },
  main: { marginTop: 20, fontWeight: "bold" }
});
