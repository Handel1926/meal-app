import { useLayoutEffect } from "react";
import { Button, ScrollView, View } from "react-native";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({ route, navigation }) {
  const meal = route.params.meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [meal, navigation]);

  return (
    <ScrollView>
      <MealDetails meal={meal} />
    </ScrollView>
  );
}

export default MealDetailsScreen;
