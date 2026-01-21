import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import styles from './styles-one-folder';

export interface Props {
    name?: string,
    image: any,
    /*assessment tab fields*/
    assessmentName?: string,
    assessmentModule?: string,
    assessmentDueDate?: string,
    /*recipe tab fields */
    recipeName?: string,
    recipeCourse?: string,
    recipeRating?: string,
    /*shopping list tab fields */
    shoppingListName?: string,
    /*todo list tab fields */
    todoListName?: string,
    /*trips tab fields */
    tripName?: string,
    tripDate?: string,
    onPress?: () => void
}

const OneFolder = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.oneFolder} >
            <ImageBackground style={styles.backgroundImage} source={props.image} resizeMode="cover"></ImageBackground>
            <View style={styles.overlay} />
            <Text style={styles.folderName}>{props.name}{props.assessmentName}{props.recipeName}{props.shoppingListName}{props.todoListName}{props.tripName}</Text>
            <Text style={styles.folderSubtitle}>{props.assessmentModule}{props.recipeCourse}{props.tripDate}</Text>
            <Text style={styles.folderSubSubtitle}>{props.assessmentDueDate}{props.recipeRating}</Text>
        </TouchableOpacity>
    )
}

export default OneFolder
