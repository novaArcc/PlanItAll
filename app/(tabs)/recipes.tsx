import React from 'react';
import { ScrollView } from 'react-native';
import OneFolder from '../universal-components/one-folder/one-folder';
import tabStyles from "../universal-styles/styles-tabs";
import Header from '../universal-components/header/header';

const AllRecipes = () => {
  return (
    <>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder recipeName="Recipe 1" recipeCourse='Starter' recipeRating='4/10'></OneFolder>
    </ScrollView>
    </>
  )
}

export default AllRecipes
