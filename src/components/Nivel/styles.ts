import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    marginTop: 75,
    marginBottom: 50,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  imagemEscudo: {
    width: 180,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
  imagemTarja: {
    width: 280,
    height: 50,
  },
  centro: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  info: {
    width: 20,
    height: 20,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
});
