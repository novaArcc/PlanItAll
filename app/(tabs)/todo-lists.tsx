import React from 'react';
import { ScrollView } from 'react-native';
import OneFolder from '../universal-components/one-folder/one-folder';
import tabStyles from "../universal-styles/styles-tabs";
import Header from '../universal-components/header/header';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllTodoLists = () => {
  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
     <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder todoListName="Todo List 1"></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllTodoLists