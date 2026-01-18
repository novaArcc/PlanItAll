import { router } from 'expo-router'
import React from 'react'
import { View, Text, Pressable, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import sharedStyles from "@/components/assessments-components/assessments-modal/styles-assessments-modal"
import variables from '@/assets/variables/variables'
import Foundation from '@expo/vector-icons/Foundation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const addTodoList = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={sharedStyles.centeredView}>
                <View style={sharedStyles.modalView}>
                    <ScrollView contentContainerStyle={sharedStyles.scrollView}>

                        <View style={sharedStyles.titleContainer}><TouchableOpacity onPress={() => router.back()}><AntDesign name="close" size={24} color="black" /></TouchableOpacity><View style={{ flexDirection: "row", gap: 12 }}><Text style={sharedStyles.addNewAssessment}>Add a New Todo List</Text>
                            <Foundation name="pencil" tyle={sharedStyles.addAssessmentIcon} size={28} color={variables.colors.primaryColor1} /> </View>
                            <View></View>
                        </View>

                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={sharedStyles.assessmentNameAndTypeContainer}>
                                <Text style={sharedStyles.assessmentNameAndType}>Todo list name:</Text>
                                <TextInput style={sharedStyles.assessmentNameAndTypeTextInput}></TextInput>
                            </View>

                            <View style={sharedStyles.assessmentNotesContainer}>
                                <Text style={sharedStyles.assessmentNotes}
                                >Tasks:</Text>
                                <TextInput multiline={true} style={[sharedStyles.assessmentNotesTextInput, { height: 510 }]}></TextInput>
                            </View>
                        </View>

                        <Pressable
                            style={[sharedStyles.button, sharedStyles.buttonClose]}
                            onPress={() => router.back()}>
                            <Text style={sharedStyles.textStyle}>Add todo list</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default addTodoList
