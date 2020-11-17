import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#eee",
    width: "95%",
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#bbb",
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#bbb",
    paddingVertical: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 25,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
  },

  deleteContainer: {
    borderTopWidth: 0.5,
    borderTopColor: "#bbb",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
