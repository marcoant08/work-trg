import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import api from "../../services/api";
import styles from "./styles";

export default function CriarNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigation = useNavigation();

  async function publicar() {
    api
      .post("CreateNews", { author: "ma", title, text })
      .then((response) => {
        ToastAndroid.show("Publicado com sucesso.", ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Notícia</Text>

      <TextInput
        placeholder="Titulo"
        multiline
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Texto"
        multiline
        style={styles.input}
        value={text}
        onChangeText={setText}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={publicar}
      >
        <Text style={styles.textButton}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
}
