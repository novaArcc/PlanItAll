import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import AddFolder from '@/components/universal-components/add-folder/add-folder';

const AllRecipes = () => {

const image = require("../../../assets/images/add-recipe-placeholder.jpg")


  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <AddFolder label="Add Recipe" onAddButtonPressed={() => router.push("/(tabs)/recipes/add-recipe")}></AddFolder>
      <OneFolder onPress={() => router.push("/(tabs)/recipes/recipe")} image={image} recipeName="Recipe 1" recipeCourse='Starter' recipeRating='4/10'></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllRecipes
