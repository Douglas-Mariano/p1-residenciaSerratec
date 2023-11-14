import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5757b8",
    width: "100%",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textContext: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    padding: 5,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  footer: {
    backgroundColor: "#354253",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: "#00BFFF",
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    width: "30%",
    height: 40,
    alignItems: "center",
    marginTop: 10,
  },
  icone: {
    width: 20,
    height: 20,
    margin: 5,
  },
});
