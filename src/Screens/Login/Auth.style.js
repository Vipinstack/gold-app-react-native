import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginVertical: 300,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inputFileds: {
    height: 250,
    top: 70,
    marginHorizontal: 33,
    zIndex:0
  },

  inputFirst: {
    backgroundColor: "#FFF",
    padding: 8,
    marginVertical: 10,
    width: "100%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  btnContainer: {
    position: "absolute",
    top: 300,
    marginHorizontal: 30,
    width: "80%",
  },

  btnText: {
    marginHorizontal: 6,
    width: "100%",
    backgroundColor: "#009387",
    color: "#F5F5F5",
    fontSize: 23,
    height: 39,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    textAlign: "center",
    fontFamily: "BreeSerif",
  },
  signup: {
    marginVertical:12,
    marginHorizontal:2,
    textDecorationLine: "underline",
    fontFamily: "BreeSerif",
  },
  forgetPass: {
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: "BreeSerif",
  },
  IconEye: {
    position: "absolute",
    top: 182,
    right:29,
    backgroundColor: "#009387",
    width: "11%",
    height: 45,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    zIndex: 1,
  },
  Icon: {
    padding: 8,
  },
});
