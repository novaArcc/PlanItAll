import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const AllTodoLists = () => {
  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header onAddButtonClicked={() => router.push("/(tabs)/todo-lists/add-todo-list")}></Header>
     <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder todoListName="Todo List 1"></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllTodoLists