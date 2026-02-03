import BackHeader from '@/components/universal-components/back-header/back-header'
import tabStyles from '@/components/universal-styles/styles-tabs'
import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import styles from '@/components/recipes-components/add-recipe/styles-add-recipe';
import sharedStyles from "@/components/assessments-components/assessments-modal/styles-assessments-modal"


const recipe = () => {
    return (
    <SafeAreaView style={tabStyles.appContainer}>
    <BackHeader></BackHeader>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
        
            <View style={styles.imageContainer}>
              <Image source={require("../../../assets/images/add-recipe-placeholder.jpg")} style={styles.image}></Image>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Recipe name</Text>
                <Text>Recipe 1</Text>
              </View>

              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Course</Text>
                <Text>Lunch</Text>
              </View>

              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Rating:</Text>
                <Text></Text>
              </View>

              <View style={sharedStyles.assessmentNotesContainer}>
                <Text style={sharedStyles.assessmentNotes}>Ingredients</Text>
                <Text>Ingredient 1</Text>
              </View>

              <View style={sharedStyles.assessmentNotesContainer}>
                <Text style={sharedStyles.assessmentNotes}>Instructions</Text>
                <Text>These are the Instructions</Text>
              </View>
            </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default recipe
