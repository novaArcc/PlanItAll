import React from 'react'
import { Text, TouchableOpacity } from "react-native";
import styles from './styles-one-folder';

export interface Props {
    name: string
}

const OneFolder = (props: Props) => {
    return (
        <TouchableOpacity style={styles.oneFolder}>
            <Text style={styles.folderName}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default OneFolder
