import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "#56A600",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

    borderColor: "white",
    borderBottomWidth: 1,
  },

  disabledContainer: {
    backgroundColor: "lightgray",
    borderColor: "gray",
  },
});

export default styles;
