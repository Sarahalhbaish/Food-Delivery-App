import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../data/restaurants";

const RestaurantCard = ({ restaurant, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(restaurant)}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.details}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={16} color="#666" />
            <Text style={styles.time}>{restaurant.deliveryTime}</Text>
          </View>
        </View>
        <Text style={styles.category}>{restaurant.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const RestaurantList = ({
  ListHeaderComponent,
  contentContainerStyle,
  navigation,
}) => {
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate("RestaurantDetails", {
      restaurant: restaurant,
    });
  };

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <RestaurantCard restaurant={item} onPress={handleRestaurantPress} />
      )}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  details: {
    flexDirection: "row",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  rating: {
    marginLeft: 4,
    color: "#666",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    marginLeft: 4,
    color: "#666",
  },
  category: {
    color: "#6b4fa2",
    fontWeight: "500",
  },
});

export default RestaurantList;
