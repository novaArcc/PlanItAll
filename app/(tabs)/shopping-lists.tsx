import React from 'react';
import { ScrollView } from 'react-native';
import OneFolder from '../universal-components/one-folder/one-folder';
import tabStyles from "../universal-styles/styles-tabs";
import Header from '../universal-components/header/header';

const AllShoppingLists = () => {
  return (
    <>
    <Header></Header>
     <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder shoppingListName="Shopping List 1"></OneFolder>
    </ScrollView>
    </>
  )
}

export default AllShoppingLists
