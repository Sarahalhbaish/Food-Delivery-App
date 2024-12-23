import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoryList from "../components/CategoryList";
import RestaurantList from "../components/RestaurantList";

const HomeScreen = ({ navigation }) => {
  const renderHeader = () => (
    <>
      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Find the best</Text>
        <Text style={styles.welcomeSubtitle}>food around you</Text>
      </View>

      {/* Categories */}
      <CategoryList />

      {/* Restaurants Header */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Restaurants</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={24} color="#6b4fa2" />
          <Text style={styles.locationText}>Kuwait City</Text>
          <Ionicons name="chevron-down" size={24} color="#6b4fa2" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for restaurants..."
            placeholderTextColor="gray"
          />
        </View>
      </View>

      {/* Main Content */}
      <RestaurantList
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e6ff",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 8,
    color: "#333",
  },
  searchContainer: {
    padding: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  welcomeContainer: {
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  welcomeSubtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6b4fa2",
  },
  sectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
});

export default HomeScreen;
