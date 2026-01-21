import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles-add-folder'
import Ionicons from '@expo/vector-icons/Ionicons'
import variables from '@/assets/variables/variables'

export interface Props {
    label: string,
    onAddButtonPressed: () => void
}

const AddFolder = (props: Props) => {
    return (
        <TouchableOpacity style={styles.addFolder} onPress={props.onAddButtonPressed}>
            <View style={styles.iconContainer}>
              <Ionicons name="add" size={40} color={variables.colors.whiteBackgroundColor} />
              </View>
              <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default AddFolder
