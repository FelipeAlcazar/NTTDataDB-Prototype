/** @format */

import React, { useState } from "react";
import { TextInput, FlatList, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Alice Johnson" },
  { id: "4", name: "Bob Brown" },
  { id: "5", name: "Charlie White" },
  { id: "6", name: "David Black" },
  { id: "7", name: "Eve Green" },
  { id: "8", name: "Frank Grey" },
  { id: "9", name: "Grace Purple" },
  { id: "10", name: "Helen Orange" },
];

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const insets = useSafeAreaInsets();

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

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ThemedView style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <ThemedText>{item.name}</ThemedText>
              <Button
                title="Añadir usuario"
                onPress={() => handleAddUser(item.name)}
                color="#007bff"
              />
            </View>
          )}
        />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "#000",
    flex: 1,
  },
  searchInput: {
    height: 40,
    color: "#fff",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#1c1c1c",
  },
  userItem: {
    padding: 8,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButton: {
    marginLeft: "auto",
    backgroundColor: "#ff0050",
    padding: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
  },
});

const handleAddUser = (userName: string) => {
  // Logic to add user
  console.log(`User ${userName} added`);
};
