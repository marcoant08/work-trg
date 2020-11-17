import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, ToastAndroid, View } from "react-native";
import News from "../../components/News";
import api from "../../services/api";
import styles from "./styles";
import Header from "../../components/Header";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const [news, setNews] = useState([]);
  const [att, setAtt] = useState(false);
  const navigation = useNavigation();
  const { usuario, sair } = useContext(AuthContext);

  useEffect(() => {
    async function load() {
      api
        .get("ListNews")
        .then((response) => {
          console.log(response.data);
          setNews(response.data);
          ToastAndroid.show(
            "As notícias foram atualizadas.",
            ToastAndroid.SHORT
          );
        })
        .catch((err) => console.log(err));
    }

    load();
  }, [att]);

  async function del(id) {
    api
      .delete(`DeleteNews/${id}`)
      .then((response) => {
        ToastAndroid.show("Deletado com sucesso.", ToastAndroid.SHORT);
        setNews(news.filter((item) => item.newsId !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Header title="News" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>
          Logado com {usuario?.name} ({usuario?.level})
        </Text>

        <TouchableOpacity onPress={sair}>
          <MaterialCommunityIcons
            style={{ paddingVertical: 10 }}
            name="logout"
            color="#555"
            size={35}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAtt(!att)}>
          <MaterialCommunityIcons
            style={{ paddingVertical: 10 }}
            name="refresh"
            color="#555"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({ item, index }) => (
          <News
            title={item.title}
            text={item.text}
            onDelete={() => del(item.newsId)}
          />
        )}
        keyExtractor={(item) => String(item.newsId)}
      />
      {usuario.level === "admin" && (
        <TouchableWithoutFeedback
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("CriarNews")}
        >
          <MaterialCommunityIcons name="plus" size={35} color="#fff" />
          <Text style={styles.buttonText}>Criar Notícia</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
