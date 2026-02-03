import React from 'react'
import { View } from 'react-native'
import styles from './styles-back-header'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const BackHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <Ionicons onPress={() => router.back()} name="chevron-back-outline" size={24} color="black" />
    </View>
  )
}

export default BackHeader