import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddFolder from '@/components/universal-components/add-folder/add-folder';
import { router } from 'expo-router';

const AllTrips = () => {

  const image = require("../../../assets/images/trips-placeholder.jpg")


const date = new Date()

  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <AddFolder label="Add Trip" onAddButtonPressed={() => router.push("/(tabs)/trips/add-trip")}></AddFolder>
      <OneFolder image={image} tripName="Trip 1" tripDate={date.toLocaleDateString()}></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllTrips
