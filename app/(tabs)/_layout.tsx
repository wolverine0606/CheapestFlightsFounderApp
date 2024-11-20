import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E6E9AF",
        animation: "shift",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0B192C",
          borderTopWidth: 0.2,
          borderTopColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="search" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
