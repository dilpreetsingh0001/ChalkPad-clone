import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TimelineScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        DILPREET SINGH (2022-BE-CSE-8 SEM-8 SEM)
      </Text>

      <Text style={styles.date}>Mar 17, Tuesday</Text>

      <View style={styles.card}>
        <Text style={styles.tag}>Circular</Text>
        <Text style={styles.title}>
          REGULAR RESULT OF BE CSE AI & ML BATCH 2024 3RD SEM
        </Text>
        <Text style={styles.link}>View Details</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 16, fontWeight: "bold", marginBottom: 20 },
  date: { textAlign: "center", marginBottom: 15 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },
  tag: {
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-start"
  },
  title: { fontWeight: "bold", marginTop: 10 },
  link: { color: "#3498db", marginTop: 10 }
});
