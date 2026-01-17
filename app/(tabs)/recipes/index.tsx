import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const AllRecipes = () => {
  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder onPress={() => router.push("/(tabs)/recipes/one-recipe")} recipeName="Recipe 1" recipeCourse='Starter' recipeRating='4/10'></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllRecipes
