import { Image, StyleSheet, FlatList } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const posts = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the content of the first post.',
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'This is the content of the second post.',
  },
  {
    id: '3',
    title: 'Third Post',
    content: 'This is the content of the third post.',
  },
];

type PostProps = {
  title: string;
  content: string;
};

const Post = ({ title, content }: PostProps) => (
  <ThemedView style={styles.postContainer}>
    <ThemedText type="title" style={styles.blackText}>{title}</ThemedText>
    <ThemedText style={styles.blackText}>{content}</ThemedText>
  </ThemedView>
);

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post title={item.title} content={item.content} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.feedContainer}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  feedContainer: {
    padding: 16,
  },
  postContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  blackText: {
    color: '#000',
  },
});