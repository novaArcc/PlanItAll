import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 55,
        paddingHorizontal: 23,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    addIcon: {
        backgroundColor: "#fff",
        padding: 4,
        borderRadius: "50%",
        borderColor: variables.colors.primaryColor1,
        borderWidth: 1
    }
})

export default styles