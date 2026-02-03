import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import styles from "@/components/universal-styles/styles-splash-screen";
import { useFonts } from "expo-font";

export default function Index() {
 const [fontsLoaded] = useFonts({
    "MomoSignature-Regular": require("../assets/fonts/MomoSignature-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
  <Redirect href="/(tabs)/assessments" />
  <View style={styles.splashContainer}>
  <Text style={styles.appName}>PlanItAll</Text>
  </View>
  </>
  )
}

