import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    oneFolder: {
        width: "45%",
        height: 150,
        backgroundColor: variables.colors.primaryColor1,
        marginVertical: 15,
        borderRadius: 10,
        justifyContent: "flex-end",
        padding: 10,
        gap: 3
    },
    folderName: {
        color: "white",
        fontSize: 16,
    },
    folderSubtitle: {
        color: "white",
        fontSize: 12,
    },
    folderSubSubtitle: {
        color: "white",
        fontSize: 10,
    },
})

export default styles