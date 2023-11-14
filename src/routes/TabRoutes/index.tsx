import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PrimeiraPagina } from "../../screens/PrimeiraPagina";
import { SegundaPagina } from "../../screens/SegundaPagina";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={PrimeiraPagina} />
      <Tab.Screen name="Nivel" component={SegundaPagina} />
    </Tab.Navigator>
  )};
