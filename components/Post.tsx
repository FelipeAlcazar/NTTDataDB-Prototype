import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type PostProps = {
  title: string;
  content: string;
  topic: string;
  author: string;
};

const colors = ['#4B0082', '#2F4F4F', '#000080', '#800080', '#8B4513', '#A52A2A', '#2E8B57', '#483D8B'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Post = ({ title, content, topic, author }: PostProps) => {
  const authorColor = getRandomColor();

  const handleAuthorPress = () => {
    // Handle author press event
    console.log(`Author ${author} clicked`);
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
        <View style={styles.topicContainer}>
          <Text style={styles.topicLabel}>{topic}</Text>
        </View>
      </View>
      <ThemedText style={[styles.blackText, styles.content]}>{content}</ThemedText>
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
  topicLabel: {
    color: '#fff',
    fontWeight: 'bold',
    userSelect: 'none', // Make text non-selectable
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
});

export default Post;