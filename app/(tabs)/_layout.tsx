import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Blog"
        options={{
          title: "Blog",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="article" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Finance"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="finance" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Pitchers"
        options={{
          title: "Pitchers",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="bar-graph" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
