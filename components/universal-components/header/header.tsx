import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles-header'
import { useFonts } from "expo-font";


const Header = () => {
 const [fontsLoaded] = useFonts({
    "MomoSignature-Regular": require("../../../assets/fonts/MomoSignature-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.planItAll}>PlanItAll</Text>
    </View>
  )
}

export default Header
