import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import AssessmentsModal from "@/components/assessments-components/assessments-modal/assessments-modal";
import OneFolder from "@/components/universal-components/one-folder/one-folder";
import tabStyles from "@/components/universal-styles/styles-tabs";
import Header from "@/components/universal-components/header/header";


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
