import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(30,144,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
  },

  input: {
    width: "80%",
    backgroundColor: "#fff",
    minHeight: 55,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
  },

  button: {
    height: 55,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    marginTop: 5,
  },

  buttonSignUp: {
    height: 55,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },

  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  textButtonSignUp: {
    color: "#1E90FF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
