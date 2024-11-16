import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type PostProps = {
  title: string;
  content: string;
  topic: string;
  author: string;
  image?: any; // Optional image property
};

const colors = ['#4B0082', '#2F4F4F', '#000080', '#800080', '#8B4513', '#A52A2A', '#2E8B57', '#483D8B'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Post = ({ title, content, topic, author, image }: PostProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const authorColor = getRandomColor();

  const handleAuthorPress = () => {
    // Handle author press event
    console.log(`Author ${author} clicked`);
  };

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ThemedView style={styles.postContainer}>
      <View style={styles.header}>
        <View>
          <ThemedText type="title" style={styles.blackText}>{title}</ThemedText>
          <TouchableOpacity onPress={handleAuthorPress}>
            <Text style={styles.authorText}>
              por <Text style={{ color: authorColor }}>{author}</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.topicContainer, topic === 'Anuncio' && styles.anuncioTopicContainer]}>
          <Text style={[styles.topicLabel, topic === 'Anuncio' && styles.anuncioTopicLabel]}>{topic}</Text>
        </View>
      </View>
      <ThemedText style={[styles.blackText, styles.content]}>{content}</ThemedText>
      {image && (
        <>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
          <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image source={image} style={styles.fullImage} />
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
    backgroundColor: '#f0f0f0', // Light background for posts
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blackText: {
    color: '#000', // Black text color
  },
  authorText: {
    fontSize: 12, // Smaller font size for author text
  },
  content: {
    marginTop: 8, // Add margin to separate title from content
  },
  topicContainer: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  anuncioTopicContainer: {
    backgroundColor: 'yellow', // Yellow background for "anuncio" topic
  },
  topicLabel: {
    color: '#fff',
    fontWeight: 'bold',
    userSelect: 'none', // Make text non-selectable
  },
  anuncioTopicLabel: {
    color: '#000', // Black text color for "anuncio" topic
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8, // Add margin to separate buttons from content
  },
  postButton: {
    padding: 8,
    marginRight: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '90%',
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default Post;