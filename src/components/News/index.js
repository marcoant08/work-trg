import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

export default function News(props) {
  const { title, text, onDelete } = props;
  const { usuario } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>

      {usuario.level === "admin" && (
        <View style={styles.deleteContainer}>
          <TouchableOpacity onPress={onDelete}>
            <MaterialCommunityIcons name="delete" size={35} color="#f00" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
