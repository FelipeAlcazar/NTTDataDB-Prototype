/** @format */

import React, { useState } from "react";
import { TextInput, FlatList, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "react-native";

// Global variable to store followed topics
let followedTopics: string[] = [];

const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Alice Johnson" },
  // Add more users as needed
];

const suggestedTopics = [
  "Tecnología", "Salud", "Deportes", "Entretenimiento", "Ciencia", "Viajes", "Comida", "Música", "Películas", "Arte", "Historia", "Educación", "Fitness", "Naturaleza", "Política", "Negocios", "Finanzas", "Juegos", "Moda", "Fotografía", "Literatura", "Psicología", "Filosofía", "Cultura", "Medio Ambiente", "Bricolaje", "Artesanías", "Paternidad", "Relaciones", "Espiritualidad"
];

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  const handleAddTopic = (topic: string) => {
    if (!followedTopics.includes(topic)) {
      followedTopics.push(topic);
      console.log(`Topic ${topic} added to followed topics`);
    }
  };

  return (
    <ThemedView style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar usuarios..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <ThemedText style={styles.userText}>{item.name}</ThemedText>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddUser(item.name)}>
              <Text style={styles.addButtonText}>Añadir usuario</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.suggestedTopicsContainer}>
        <ThemedText style={styles.suggestedTopicsTitle}>Temas Sugeridos</ThemedText>
        <View style={styles.topicsGrid}>
          {suggestedTopics.map((topic) => (
            <TouchableOpacity
              key={topic}
              style={styles.topicButton}
              onPress={() => handleAddTopic(topic)}
            >
              <Text style={styles.topicButtonText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
    backgroundColor: "#fff", // White background for the main page
    flex: 1,
  },
  searchInput: {
    height: 40,
    color: "#000", // Black text color for input
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#f0f0f0",
  },
  userItem: {
    padding: 8,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userText: {
    color: "#000", // Black text color for user names
  },
  addButton: {
    marginLeft: "auto",
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 8, // Rounded borders for the button
  },
  addButtonText: {
    color: "#fff",
  },
  suggestedTopicsContainer: {
    marginTop: 16,
    backgroundColor: "#fff", // White background for suggested topics section
    padding: 16,
    borderRadius: 8,
  },
  suggestedTopicsTitle: {
    color: "#000", // Black text color for title
    fontSize: 18,
    marginBottom: 8,
  },
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  topicButton: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 8,
    minWidth: "30%",
  },
  topicButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

const handleAddUser = (userName: string) => {
  // Logic to add user
  console.log(`User ${userName} added`);
};