import BackHeader from '@/components/universal-components/back-header/back-header'
import tabStyles from '@/components/universal-styles/styles-tabs'
import { router } from 'expo-router';
import React from 'react'
import { Pressable, ScrollView, TextInput, View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import styles from '@/components/assessments-components/assessments-modal/styles-assessments-modal';

const assessment = () => {
    return (
    <SafeAreaView style={tabStyles.appContainer}>
    <BackHeader></BackHeader>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
        
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={styles.assessmentNameAndTypeContainer}>
                                <Text style={styles.assessmentNameAndType}>Assessment name</Text>
                                <Text>Assessment 1</Text>
                            </View>

                            <View style={styles.assessmentNameAndTypeContainer}>
                                <Text style={styles.assessmentNameAndType}>Assessment type</Text>
                                <Text>Assessment Type 1</Text>
                            </View>

                            <View style={styles.assessmentModuleAndWeightingContainer}>
                                <Text style={styles.assessmentModuleAndWeighting}>Module name</Text>
                                <Text>Module 1</Text>
                            </View>

                            <View style={styles.assessmentModuleAndWeightingContainer}>
                                <Text style={styles.assessmentModuleAndWeighting}>Final grade weighting</Text>
                                <Text>50%</Text>
                            </View>

                            <View style={styles.assessmentDueDateContainer}>
                                <Text style={styles.assessmentDueDate}>Due date</Text>
                                <Text>12th December 2020</Text>
                            </View>

                            <View style={styles.assessmentNotesContainer}>
                                <Text style={styles.assessmentNotes}>Notes</Text>
                                <Text>Notessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                            </View>
                        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default assessment
