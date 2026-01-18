import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const tabStyles = StyleSheet.create({
    appContainer: {
     width: "100%",
     height: "100%",
     backgroundColor: variables.colors.whiteBackgroundColor
    },
   tabContainer: {
     paddingHorizontal: 23,
     flexDirection: "row",
     justifyContent: "space-between",
     flexWrap: "wrap",
   }
})

export default tabStyles 