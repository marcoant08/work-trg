import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { acessar } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="E-mail"
        multiline
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        multiline
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => acessar(email, password)}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSignUp}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textButtonSignUp}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
