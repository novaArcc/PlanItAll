import { router } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from '@/components/recipes-components/add-recipe/styles-add-recipe'
import sharedStyles from "@/components/assessments-components/assessments-modal/styles-assessments-modal"
import variables from '@/assets/variables/variables'
import Foundation from '@expo/vector-icons/Foundation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating-widget';
import AntDesign from '@expo/vector-icons/AntDesign';

const addRecipe = () => {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={sharedStyles.centeredView}>
        <View style={sharedStyles.modalView}>
          <ScrollView contentContainerStyle={sharedStyles.scrollView}>

            <View style={sharedStyles.titleContainer}><TouchableOpacity onPress={() => router.back()}><AntDesign name="close" size={24} color="black" /></TouchableOpacity><View style={{ flexDirection: "row", gap: 12 }}><Text style={sharedStyles.addNewAssessment}>Add a New Recipe</Text>
              <Foundation name="pencil" tyle={sharedStyles.addAssessmentIcon} size={28} color={variables.colors.primaryColor1} /> </View>
              <View></View>
              </View>

            <View style={styles.imageContainer}>
              <Image source={require("../../../assets/images/add-recipe-placeholder.jpg")} style={styles.image}></Image>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Recipe name:</Text>
                <TextInput style={sharedStyles.assessmentNameAndTypeTextInput}></TextInput>
              </View>

              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Course:</Text>
                <TextInput style={sharedStyles.assessmentNameAndTypeTextInput}></TextInput>
              </View>

              <View style={sharedStyles.assessmentNameAndTypeContainer}>
                <Text style={sharedStyles.assessmentNameAndType}>Rating:</Text>
                <StarRating step="full" onChange={setRating} rating={rating}
                ></StarRating>
              </View>

              <View style={sharedStyles.assessmentNotesContainer}>
                <Text style={sharedStyles.assessmentNotes}>Ingredients:</Text>
                <TextInput multiline={true} style={sharedStyles.assessmentNotesTextInput}></TextInput>
              </View>

              <View style={sharedStyles.assessmentNotesContainer}>
                <Text style={sharedStyles.assessmentNotes}>Instructions:</Text>
                <TextInput multiline={true} style={sharedStyles.assessmentNotesTextInput}></TextInput>
              </View>
            </View>

            <Pressable
              style={[sharedStyles.button, sharedStyles.buttonClose]}
              onPress={() => router.back()}>
              <Text style={sharedStyles.textStyle}>Add recipe</Text>
            </Pressable>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default addRecipe
