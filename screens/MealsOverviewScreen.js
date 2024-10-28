import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItems from "../components/MealItems";
import { useEffect, useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const cat = route.params.categoryId;
  const displauMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(cat);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === cat;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cat, navigation]);

  function readItem(itemData) {
    const item = itemData.item;
    function handlePress() {
      navigation.navigate("MealDetailsScreen", { meal: item });
    }
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
      onPress: handlePress,
    };

    return <MealItems {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displauMeals}
        keyExtractor={(item) => item.id}
        renderItem={readItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
