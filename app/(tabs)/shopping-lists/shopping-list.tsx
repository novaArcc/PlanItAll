import BackHeader from '@/components/universal-components/back-header/back-header'
import tabStyles from '@/components/universal-styles/styles-tabs'
import React from 'react'
import { ScrollView, TextInput, View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import sharedStyles from "@/components/assessments-components/assessments-modal/styles-assessments-modal"

const shoppingList = () => {
    return (
    <SafeAreaView style={tabStyles.appContainer}>
    <BackHeader></BackHeader>
    <ScrollView contentContainerStyle={tabStyles.tabContainer}>
                           <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={sharedStyles.assessmentNameAndTypeContainer}>
                                <Text style={sharedStyles.assessmentNameAndType}>Shopping list name</Text>
                                <Text>Shopping list 1</Text>
                            </View>

                            <View style={sharedStyles.assessmentNotesContainer}>
                                <Text style={sharedStyles.assessmentNotes}
                                >Shopping list</Text>
                                <Text>This is the shopping list
                                </Text>
                            </View>
                        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default shoppingList