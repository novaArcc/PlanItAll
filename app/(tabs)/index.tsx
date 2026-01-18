import OneFolder from '@/components/universal-components/one-folder/one-folder';
import tabStyles from '@/components/universal-styles/styles-tabs';
import Header from '@/components/universal-components/header/header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllTrips = () => {

const date = new Date()

  return (
     <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder tripName="Trip 1" tripDate={date.toLocaleDateString()}></OneFolder>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AllTrips
