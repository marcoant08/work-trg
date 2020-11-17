import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function News(props) {
  const { title, text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
