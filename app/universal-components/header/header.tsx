import React from 'react'
import { View } from 'react-native'
import styles from './styles-header'
import Ionicons from '@expo/vector-icons/Ionicons';
import variables from '@/assets/variables/variables';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Ionicons style={styles.addIcon} name="add" size={24} color={variables.colors.primaryColor1} />
    </View>
  )
}

export default Header
