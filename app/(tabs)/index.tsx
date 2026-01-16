import { ScrollView } from "react-native";
import OneFolder from "../universal-components/one-folder/one-folder";
import tabStyles from "../universal-styles/styles-tabs";
import Header from "../universal-components/header/header";
import AssessmentsModal from "../pages/assessments/assessments-modal/assessments-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";


// assessments page
export default function Index() {
      const [modalVisible, setModalVisible] = useState(false);

const date = new Date()

  return (
    <SafeAreaView style={tabStyles.appContainer}>
    <Header onAddButtonClicked={() => setModalVisible(true)}></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder assessmentName="Assessment 1" assessmentModule="Module 1" assessmentDueDate={date.toLocaleDateString()}></OneFolder>
      <AssessmentsModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </ScrollView>
    </SafeAreaView>
  );
}
