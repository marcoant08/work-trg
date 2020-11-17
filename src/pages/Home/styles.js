import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(30,144,255,0.2)",
  },

  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
  },

  button: {
    height: 65,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1E90FF",
    alignSelf: "center",
    marginVertical: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
});

export default styles;
