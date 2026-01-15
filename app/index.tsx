import { View } from "react-native";
import styles from "./styles-index";
import OneFolder from "./components/one-folder/one-folder";

export default function Index() {
  return (
    <View style={styles.indexContainer}>
      <OneFolder name="Assessments"></OneFolder>
      <OneFolder name="Recipes"></OneFolder>
      <OneFolder name="Shopping Lists"></OneFolder>
      <OneFolder name="Todo Lists"></OneFolder>
      <OneFolder name="Trips"></OneFolder>
    </View>
  );
}
