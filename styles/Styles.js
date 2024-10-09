import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginTop: Constants.statusBarHeight + 1,
    marginLeft: 10,
    marginRight: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 10
  },
  button: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 2,
    backgroundColor: 'orange'
  },
  categories: {
    margin: 10,
    justifyContent: "center",

  },
  header: {
    margin: 50,
    textAlign: "center",

  },
  card: {
    marginVertical: 8,
    marginHorizontal: 0,
    width: '100%',
    borderWidth: 2,
  },
  workoutIcons: {
    margin: 10,
    padding: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  chip: {
    flex: 1,
    margin: 0,
    padding: 1,
    flexDirection: "row",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    fontWeight: "bold",
  },
  alertContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -150 }],
    padding: 70,
    borderRadius: 20,
    borderWidth: 3,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontWeight: 'bold'
  },
  alertText: {
    fontWeight: 'bold',
    margin: 10,
  },
  Settingscontainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 10,
  },
  radioButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 100,
    padding: 50,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButtonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  text: {
    fontWeight: "bold",
  }
});
