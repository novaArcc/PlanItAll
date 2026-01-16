import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles-header'
import Ionicons from '@expo/vector-icons/Ionicons';
import variables from '@/assets/variables/variables';

export interface Props {
    onAddButtonClicked?: () => void
}


const Header = (props: Props) => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.onAddButtonClicked}>
        <Ionicons style={styles.addIcon} name="add" size={24} color={variables.colors.whiteBackgroundColor} />
        </TouchableOpacity>
    </View>
  )
}

export default Header
