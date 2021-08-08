import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlashCard from "./FlashCard";

const decks = [
  {
    id: 1,
    title: "Doctor Who",
    questions: [
      { question: "The Doctor was born in Gallifrey.", answer: "Yes" },
      {
        question: "Is River Song the Doctor's wife?",
        answer: "Yes",
      },
    ],
  },
  {
    title: "Bob's Burgers",
    id: 2,
    questions: [
      { question: "Bob and Linda have 2 kids.", answer: "No" },
      { question: "Does Bob have a best friend?", answer: "Yes" },
    ],
  },
];

export default function DeckList() {
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.deckTitle}> Decks</Text>
      </SafeAreaView>

      <FlatList
        data={decks}
        keyExtractor={(decks) => decks.id.toString()}
        renderItem={({ item }) => (
          <FlashCard title={item.title} cardCount={item.questions.length} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deckTitle: {
    alignItems: "flex-start",
    fontWeight: "bold",
    padding: 20,
    fontSize: 40,
    fontFamily: "Copperplate",
  },
});
