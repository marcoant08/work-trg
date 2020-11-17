import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Header(props) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
