/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  ImageBackground,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const verifiedIcon = require("@/assets/images/verificado.png");

type PostProps = {
  title: string;
  content: string;
  topic: string;
  author: string;
  image?: any;
};

const colors = [
  "#4B0082", // Indigo
  "#2F4F4F", // DarkSlateGray
  "#000080",
  "#800080",
  "#8B4513",
  "#A52A2A",
  "#2E8B57",
  "#483D8B",
];

const influencersNames = ["Moreno", "Gonzalo", "juan", "pedro", "luis"];

const topicColors: { [key: string]: string } = {
  Todos: "gray",
  Videojuegos: "blue",
  Deportes: "green",
  Anuncio: "yellow",
  Moda: "purple",
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

let devideHeight = Dimensions.get("window").height;
let devideWidth = Dimensions.get("window").width;

const Post = ({ title, content, topic, author, image }: PostProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const authorColor = getRandomColor();

  const handleAuthorPress = () => {
    console.log(`Author ${author} clicked`);
  };

  const handleImagePress = () => {
    console.log(devideHeight);
    console.log(devideWidth);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ThemedView style={styles.postContainer}>
      <View style={styles.header}>
        <View style={{ flex: 0.7, flexDirection: "column" }}>
          <ThemedText type="title" style={styles.blackText}>
            {title}
          </ThemedText>
          <TouchableOpacity
            onPress={handleAuthorPress}
            style={styles.authorContainer}
          >
            <Text style={styles.authorText}>
              por <Text style={{ color: authorColor }}>{author}</Text>
              {influencersNames.includes(author) && (
                <Image source={verifiedIcon} style={styles.verifiedIcon} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.topicContainer,
            topic === "Anuncio"
              ? styles.anuncioTopicContainer
              : { backgroundColor: topicColors[topic] || "gray" },
          ]}
        >
          <Text
            style={[
              styles.topicLabel,
              topic === "Anuncio" && styles.anuncioTopicLabel,
            ]}
          >
            {topic}
          </Text>
        </View>
      </View>
      <ThemedText style={[styles.blackText, styles.content]}>
        {content}
      </ThemedText>
      {image && (
        <>
          <TouchableOpacity
            onPress={handleImagePress}
            accessibilityLabel="Ampliar imagen"
            accessible={true}
          >
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            transparent={true}
            style={styles.modalContainer}
            accessible={true}
            accessibilityLabel="Imagen ampliada"
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={handleCloseModal}
                accessible={true}
                accessibilityLabel="Cerrar imagen ampliada"
              >
                <ImageBackground
                  source={image}
                  resizeMode="contain"
                  style={{
                    height: devideHeight * 0.9,
                    width: devideWidth * 0.9,
                    alignSelf: "center",
                    marginTop: devideHeight * 0.05,
                  }}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.postButton}>
          <Icon name="comment" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Icon name="heart" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Icon name="share" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blackText: {
    color: "#000",
  },
  authorContainer: {
    marginTop: 8,
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "bold",
  },
  authorText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  content: {
    marginTop: 8,
  },
  topicContainer: {
    backgroundColor: "green",
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  anuncioTopicContainer: {
    backgroundColor: "yellow",
  },
  topicLabel: {
    color: "#fff",
    fontWeight: "bold",
    userSelect: "none",
  },
  anuncioTopicLabel: {
    color: "#000",
  },
  image: {
    width: "100%",
    height: 200,
    aspectRatio: 16 / 9,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 8, // Add margin to separate buttons from content
  },
  postButton: {
    padding: 8,
    marginRight: 8,
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    borderRadius: 6,
    aspectRatio: 16 / 9,
    width: "70%",
    height: "auto",
  },
  closeButton: {
    position: "static",
    backgroundColor: "#c45f4a",
    padding: 8,
    borderRadius: 50,
    alignSelf: "flex-end",
    margin: 36,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    marginLeft: 12,
  },
});

export default Post;
