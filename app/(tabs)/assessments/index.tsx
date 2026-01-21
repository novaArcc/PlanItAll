import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import OneFolder from "@/components/universal-components/one-folder/one-folder";
import tabStyles from "@/components/universal-styles/styles-tabs";
import Header from "@/components/universal-components/header/header";
import { router } from "expo-router";
import AddFolder from "@/components/universal-components/add-folder/add-folder";


// assessments page
export default function Index() {

const image = require("../../../assets/images/assessments-placeholder.jpg")

const date = new Date()

  return (
    <SafeAreaView style={tabStyles.appContainer}>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <AddFolder label="Add Assessment" onAddButtonPressed={() => router.push("/(tabs)/assessments/add-assessment")}></AddFolder>
      <OneFolder image={image} assessmentName="Assessment 1" assessmentModule="Module 1" assessmentDueDate={date.toLocaleDateString()}></OneFolder>
    </ScrollView>
    </SafeAreaView>
  );
}
