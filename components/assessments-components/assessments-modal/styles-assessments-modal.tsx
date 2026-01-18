import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.colors.whiteBackgroundColor
    },
    modalView: {
        backgroundColor: variables.colors.whiteBackgroundColor,
        borderRadius: 20,
        width: "95%",
        height: "100%",
    },
    scrollView: {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        borderRadius: 20,
        padding: 13,
        elevation: 2,
        width: "95%",
        alignSelf: "center"
    },
    buttonOpen: {
        backgroundColor: variables.colors.primaryColor1,
    },
    buttonClose: {
        backgroundColor: variables.colors.primaryColor1,
    },
    textStyle: {
        color: variables.colors.whiteBackgroundColor,
        fontWeight: 400,
        textAlign: 'center',
    },
    titleContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        marginTop: 30,
    },
    titleAndIcon: {
    flexDirection:"row",
    },
    addNewAssessment: {
        fontSize: 22,
        fontWeight: 600
    },
    addAssessmentIcon: {
        marginTop: 2,
    },
    assessmentNameAndTypeContainer: {
        width: "95%"
    },
    assessmentNameAndType: {
        fontSize: variables.fontSizes.inputHeader,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 500
    },
    assessmentNameAndTypeTextInput: {
        height: 35,
        padding: 5,
        fontSize: variables.fontSizes.inputHeader,
        boxShadow: variables.shadows.textInputShadow,
        backgroundColor: variables.colors.textInputBackground
    },
    assessmentModuleAndWeightingContainer: {
        width: "95%"
    },
    assessmentModuleAndWeighting: {
        fontSize: variables.fontSizes.inputHeader,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 500
    },
    assessmentModuleAndWeightingTextInput: {
        height: 35,
        fontSize: variables.fontSizes.inputHeader,
        padding: 5,
        boxShadow: variables.shadows.textInputShadow,
        backgroundColor: variables.colors.textInputBackground
    },
    assessmentDueDateContainer: {
        width: "95%"
    },
    assessmentDueDate: {
        fontSize: variables.fontSizes.inputHeader,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 500
    },
    assessmentNotesContainer: {
        width: "95%"
    },
    assessmentNotes: {
        fontSize: variables.fontSizes.inputHeader,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 500
    },
    assessmentNotesTextInput: {
        padding: 5,
        height: 350,
        marginBottom: 20,
        boxShadow: variables.shadows.textInputShadow,
        backgroundColor: variables.colors.textInputBackground
    }

})

export default styles