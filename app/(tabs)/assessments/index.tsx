import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import OneFolder from "@/components/universal-components/one-folder/one-folder";
import tabStyles from "@/components/universal-styles/styles-tabs";
import Header from "@/components/universal-components/header/header";
import { router } from "expo-router";


// assessments page
export default function Index() {

const date = new Date()

  return (
    <SafeAreaView style={tabStyles.appContainer}>
    <Header onAddButtonClicked={() => router.push("/(tabs)/assessments/add-assessment")}></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder assessmentName="Assessment 1" assessmentModule="Module 1" assessmentDueDate={date.toLocaleDateString()}></OneFolder>
    </ScrollView>
    </SafeAreaView>
  );
}
