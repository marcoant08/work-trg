import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import AuthProvider from "./src/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
