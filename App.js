import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthProvider, { AuthContext } from "./src/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import RoutesIndex from "./src/routesIndex";

export default function App() {
  const { signed } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <RoutesIndex />
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
