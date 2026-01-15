import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabsLayout() {
  return (
<>
    <StatusBar style="auto" />
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Assessments", headerShown: false,  tabBarHideOnKeyboard: true,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="school" size={size} color={color} />
    ), }}></Tabs.Screen>
      <Tabs.Screen name="recipes" options={{ title: "Recipes", headerShown: false,  tabBarHideOnKeyboard: true,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="fast-food-outline" size={size} color={color} />
    ), }}></Tabs.Screen>
      <Tabs.Screen name="shopping-lists" options={{ title: "Shopping", headerShown: false,  tabBarHideOnKeyboard: true,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="cart-outline" size={size} color={color} />
    ), }}></Tabs.Screen>
      <Tabs.Screen name="todo-lists" options={{ title: "Todo Lists", headerShown: false,  tabBarHideOnKeyboard: true,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="checkbox-outline" size={size} color={color} />
    ),}}></Tabs.Screen>
      <Tabs.Screen name="trips" options={{ title: "Trips", headerShown: false,  tabBarHideOnKeyboard: true,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="airplane-outline" size={size} color={color}/>
    ),}}></Tabs.Screen>
    </Tabs>
    </>
  )
}
