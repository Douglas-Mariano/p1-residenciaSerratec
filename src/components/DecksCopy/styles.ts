import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(135, 206, 250, 0.2)",
    width: "95%",
    margin: 10,
    paddingBottom:10,
    borderRadius: 5,
  },
  context: {
    flexDirection: "row",
  },
  centro: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  foot: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width:"35%",
    backgroundColor: "rgba(135, 206, 250, 0.2)",
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    marginLeft: "25%",
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  subTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  textFoot: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  imagemSeta: {
    width: 20,
    height: 20,
    margin: 5,
  },
  imagemCard: {
    width: 335,
    height: 250,
    margin: 15,
  },
  imagemCoroa: {
    width: 49,
    height: 37,
  },
});
