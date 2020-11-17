import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CriarNews from "./pages/CriarNews";

const MyStack = createStackNavigator();

function SecureRoutes() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="CriarNews" component={CriarNews} />
    </MyStack.Navigator>
  );
}

export default SecureRoutes;
