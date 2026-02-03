import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 55,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    planItAll: {
        color: variables.colors.appNameColor,
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "MomoSignature-Regular"
    }
})

export default styles