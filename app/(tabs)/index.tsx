import React, { useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Post from '@/components/Post'; // Importing the Post component

const posts = [
  {
    id: '1',
    title: 'Estrategias en Call of Duty: Warzone',
    content: 'Me encanta jugar Call of Duty: Warzone. La emoción de planificar estrategias con mi equipo y ejecutar la emboscada perfecta es inigualable. Las nuevas actualizaciones del mapa han hecho el juego aún más emocionante. Recientemente, descubrí una nueva táctica para dominar en el modo Battle Royale: se trata de utilizar el terreno a nuestro favor, escondiéndonos en lugares estratégicos y atacando en el momento justo. Además, la comunicación constante con el equipo es clave para coordinar movimientos y asegurar la victoria.',
    topic: 'Videojuegos',
    author: 'jU4n1t0',
  },
  {
    id: '2',
    title: 'La emoción de ver fútbol en vivo',
    content: 'No hay nada como la atmósfera de un partido de fútbol en vivo. La energía de la multitud, la habilidad de los jugadores y la imprevisibilidad del juego hacen que cada partido sea una experiencia inolvidable. Recuerdo la última vez que fui al estadio a ver a mi equipo favorito; el ambiente era electrizante. Los cánticos, las banderas ondeando y la emoción de cada gol nos mantenían a todos al borde de nuestros asientos. Además, poder compartir ese momento con amigos y familiares lo hace aún más especial.',
    topic: 'Deportes',
    author: 'SoccerFan34',
  },
  {
    id: '3',
    title: 'Adoptando la moda sostenible',
    content: 'Recientemente, he comenzado a explorar la moda sostenible. Es genial llevar ropa que no solo es estilosa, sino también amigable con el medio ambiente. La moda sostenible se enfoca en reducir el impacto ambiental y promover prácticas éticas en la producción de ropa. He descubierto tiendas de segunda mano increíbles y he aprendido a upcycling, transformando prendas viejas en nuevas piezas únicas. Además, apoyar marcas que se preocupan por el planeta me hace sentir que estoy contribuyendo a un futuro mejor.',
    topic: 'Moda',
    author: 'EcoFashionista',
  },
];

const topics = ['Todos', ...new Set(posts.map(post => post.topic))];

export default function HomeScreen() {
  const [selectedTopic, setSelectedTopic] = useState('Todos');

  const filteredPosts = selectedTopic === 'Todos' ? posts : posts.filter(post => post.topic === selectedTopic);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.feedContainer}>
        <View style={styles.topicsContainer}>
          {topics.map(topic => (
            <TouchableOpacity
              key={topic}
              style={[styles.topicButton, selectedTopic === topic && styles.selectedTopicButton]}
              onPress={() => setSelectedTopic(topic)}
            >
              <Text style={styles.topicButtonText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>Publicaciones Recientes</Text>
        <FlatList
          data={filteredPosts}
          renderItem={({ item }) => <Post title={item.title} content={item.content} topic={item.topic} author={item.author} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Main background color
  },
  feedContainer: {
    padding: 16,
  },
  topicsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  topicButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 4,
  },
  selectedTopicButton: {
    backgroundColor: 'black',
  },
  topicButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    userSelect: 'none', // Make text non-selectable
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#1D3D47',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#000', // Black text color for title
  },
});