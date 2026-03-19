import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Timeline from "./screens/TimelineScreen";
import Messages from "./screens/MessagesScreen";
import Notifications from "./screens/NotificationsScreen";
import Profile from "./screens/ProfileScreen";
import Menu from "./screens/MenuScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Timeline" component={Timeline} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
