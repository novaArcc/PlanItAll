import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addFolder: {
        width: "45%",
        height: 150,
        backgroundColor: variables.colors.primaryColor1,
        marginVertical: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,

        //ios shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 8
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 600,
        color: variables.colors.whiteBackgroundColor
    }
})

export default styles 