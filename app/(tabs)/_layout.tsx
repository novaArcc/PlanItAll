import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabsLayout() {
  return (
<>
    <StatusBar style="auto" />
    <Tabs>
      <Tabs.Screen name="assessments"></Tabs.Screen>
      <Tabs.Screen name="recipes"></Tabs.Screen>
      <Tabs.Screen name="shopping-lists"></Tabs.Screen>
      <Tabs.Screen name="todo-lists"></Tabs.Screen>
      <Tabs.Screen name="trips"></Tabs.Screen>
    </Tabs>
    </>
  )
}
