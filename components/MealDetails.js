import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import List from "./List";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import IconButton from "./IconButton";

function MealDetails({ meal }) {
  const navigation = useNavigation();

  function handlePress() {
    console.log("Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={handlePress} icon="star" color="white" />;
      },
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={[styles.detailItem, { color: "white" }]}>
          {meal.duration}m
        </Text>
        <Text style={[styles.detailItem, { color: "white" }]}>
          {meal.complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailItem, { color: "white" }]}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>

      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          <List data={meal.ingredients} />
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          <List data={meal.steps} />
        </View>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  listContainer: {
    width: "80%,",
  },
  mainListContainer: {
    width: "100%",
    alignItems: "center",
  },
});
