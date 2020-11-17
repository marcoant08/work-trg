import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
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
  const navigation = useNavigation();
  const { usuario, sair } = useContext(AuthContext);

  useEffect(() => {
    async function load() {
      api
        .get("ListNews")
        .then((response) => {
          //console.log(response.data);
          setNews(response.data);
        })
        .catch((err) => console.log(err));
    }

    load();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="News" />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.title}>
          Logado com {usuario?.name} ({usuario?.level})
        </Text>
        <TouchableOpacity onPress={sair}>
          <MaterialCommunityIcons
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
            name="logout"
            color="#fff"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({ item, index }) => (
          <News title={item.title} text={item.text} />
        )}
        keyExtractor={(item) => String(item.timestamp)}
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
