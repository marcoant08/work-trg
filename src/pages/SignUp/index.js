import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUseranme] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("user");
  const { criar } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        multiline
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Username"
        multiline
        style={styles.input}
        value={username}
        onChangeText={setUseranme}
      />

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

      <Picker
        selectedValue={level}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setLevel(itemValue)}
      >
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => criar(name, username, email, password)}
      >
        <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
