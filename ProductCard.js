import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View style={styles.itemContainer} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Image source={{ uri: item.icon }} style={styles.icon} />
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 40,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 6, 
    borderColor:'#25233e',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '60%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'left',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#25233e',
},
  icon: {
    height: 40,
    width: 35,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#a3a3ac',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
});

export default ProductCard;
