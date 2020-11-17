import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CriarNews from "./pages/CriarNews";

const MyStack = createStackNavigator();

function Routes() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Login" component={Login} />
      <MyStack.Screen name="SignUp" component={SignUp} />
      <MyStack.Screen name="CriarNews" component={CriarNews} />
    </MyStack.Navigator>
  );
}

export default Routes;
