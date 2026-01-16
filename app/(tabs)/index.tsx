import { ScrollView, View } from "react-native";
import OneFolder from "../universal-components/one-folder/one-folder";
import tabStyles from "../universal-styles/styles-tabs";
import Header from "../universal-components/header/header";


// assessments page
export default function Index() {

const date = new Date()

  return (
    <>
    <Header></Header>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
      <OneFolder assessmentName="Assessment 1" assessmentModule="Module 1" assessmentDueDate={date.toLocaleDateString()}></OneFolder>
    </ScrollView>
    </>
  );
}
