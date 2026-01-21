import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    oneFolder: {
        width: "45%",
        height: 150,
        marginVertical: 15,
        borderRadius: 10,
        justifyContent: "flex-end",
        overflow: "hidden",
        gap: 3
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    folderName: {
        color: "white",
        fontSize: 16,
        paddingLeft: 10
    },
    folderSubtitle: {
        color: "white",
        fontSize: 12,
        paddingLeft: 10
    },
    folderSubSubtitle: {
        color: "white",
        fontSize: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
})

export default styles