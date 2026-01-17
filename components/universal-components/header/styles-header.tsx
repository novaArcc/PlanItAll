import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 55,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    addIcon: {
        padding: 6,
        borderRadius: "50%",
        backgroundColor: variables.colors.primaryColor1,
    }
})

export default styles