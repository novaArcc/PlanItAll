import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import AddFolder from '@/components/universal-components/add-folder/add-folder';

const AllShoppingLists = () => {

const image = require("../../../assets/images/shopping-lists-placeholder.jpg")


  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
     <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <AddFolder label="Add Shopping List" onAddButtonPressed={() => router.push("/(tabs)/shopping-lists/add-shopping-list")}></AddFolder>
      <OneFolder onPress={() => router.push("/(tabs)/shopping-lists/shopping-list")} image={image} shoppingListName="Shopping List 1"></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllShoppingLists
