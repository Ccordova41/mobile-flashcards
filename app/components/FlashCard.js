import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function FlashCard({ title, cardCount }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.textField}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cardCount}>{cardCount} cards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    borderWidth: 0.3,
    justifyContent: "center",
    margin: 30,
    height: 200,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardCount: {
    fontWeight: "400",
    color: colors.lightBlue,
    fontSize: 20,
    fontWeight: "bold",
  },

  title: {
    fontFamily: "Optima",
    fontSize: 35,
    fontWeight: "800",
    color: colors.lightBlue,
    marginBottom: 7,
  },
});
