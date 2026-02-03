import variables from "@/assets/variables/variables";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variables.colors.whiteBackgroundColor
    },
  appName:{
    fontFamily: "MomoSignature-Regular",
    color: variables.colors.appNameColor,
    fontWeight: 600,
    fontSize: 40
  }
})

export default styles