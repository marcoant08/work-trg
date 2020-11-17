import React, { useEffect, useState } from "react";
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

export default function Home() {
  const [news, setNews] = useState([]);
  const navigation = useNavigation();

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
      <Text style={styles.title}>
        Logado com {"marcoant"} ({"user"})
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({ item, index }) => (
          <News title={item.title} text={item.text} />
        )}
        keyExtractor={(item) => String(item.timestamp)}
      />
      <TouchableWithoutFeedback
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CriarNews")}
      >
        <MaterialCommunityIcons name="plus" size={35} color="#fff" />
        <Text style={styles.buttonText}>Criar Notícia</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
