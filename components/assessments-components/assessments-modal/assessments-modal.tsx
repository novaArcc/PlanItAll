import React, { useState } from 'react'
import { ScrollView, Modal, Pressable, View, Text, TextInput } from 'react-native'
import styles from './styles-assessments-modal'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Foundation from '@expo/vector-icons/Foundation';
import variables from '@/assets/variables/variables';

export interface Props {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const assessmentsModal = (props: Props) => {



    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props.modalVisible}
                    statusBarTranslucent={true}
                    onRequestClose={() => {
                        props.setModalVisible(!props.modalVisible);
                    }}>
                    <SafeAreaView style={styles.centeredView}>
                        <View style={styles.modalView}>
                             {/*assessment details input */}
                             <ScrollView contentContainerStyle={styles.scrollView}>
                             <View style={styles.titleContainer}><Text style={styles.addNewAssessment}>Add a New Assessessment</Text> 
                             <Foundation name="pencil" tyle={styles.addAssessmentIcon} size={28} color={variables.colors.primaryColor1} /></View>
                        
                             <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={styles.assessmentNameAndTypeContainer}>
                                <Text style={styles.assessmentNameAndType}>Assessment name:</Text>
                                <TextInput style={styles.assessmentNameAndTypeTextInput}></TextInput>
                            </View>

                            <View style={styles.assessmentNameAndTypeContainer}>
                                <Text style={styles.assessmentNameAndType}>Assessment type:</Text>
                                <TextInput style={styles.assessmentNameAndTypeTextInput}></TextInput>
                            </View>

                            <View style={styles.assessmentModuleAndWeightingContainer}>
                                <Text style={styles.assessmentModuleAndWeighting}>Module name:</Text>
                                <TextInput style={styles.assessmentModuleAndWeightingTextInput}></TextInput>
                            </View>

                            <View style={styles.assessmentModuleAndWeightingContainer}>
                                <Text style={styles.assessmentModuleAndWeighting}>Final grade weighting:</Text>
                                <TextInput style={styles.assessmentModuleAndWeightingTextInput}></TextInput>
                            </View>

                           <View style={styles.assessmentDueDateContainer}>
                            <Text style={styles.assessmentDueDate}>Due date:</Text>
                            <RNDateTimePicker  accentColor={variables.colors.primaryColor1}value={new Date()}></RNDateTimePicker>
                           </View>

                           <View style={styles.assessmentNotesContainer}>
                            <Text style={styles.assessmentNotes}>Notes:</Text>
                            <TextInput multiline={true} style={styles.assessmentNotesTextInput}></TextInput>
                           </View>
                           </View>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => props.setModalVisible(!props.modalVisible)}>
                                <Text style={styles.textStyle}>Add assessment</Text>
                            </Pressable>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default assessmentsModal
