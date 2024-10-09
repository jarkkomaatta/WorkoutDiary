import { PaperProvider, Provider, RadioButton, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import { View } from "react-native";
import { useState } from "react";
import Context from "./Context";
import { useContext } from "react";




export default function Settings() {


  const theme = useTheme()
  const { unit, setUnit } = useContext(Context)
  // console.log(unit)


  return (
    <PaperProvider>
      <View style={[Styles.container, { color: theme.colors.text }]}>
        <Text variant="displaySmall" style={[ Styles.header, { color: theme.colors.text }]}>Settings</Text>

        <View style={[Styles.radioButtonContainer, {backgroundColor: theme.colors.container}]}>
          <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold",color: theme.colors.text }}>
            You can choose between kilometeres and miles</Text>
          <View style={Styles.radioButtonRow}>
            <Text style={[Styles.radioButtonLabel, {color: theme.colors.text}]}>Kilometers</Text>
            <RadioButton
              value="km"
              status={unit === 'km' ? 'checked' : 'unchecked'}
              onPress={() => setUnit('km')}
              color={theme.colors.text}
            />
          </View>
          <View style={Styles.radioButtonRow}>
            <Text style={[Styles.radioButtonLabel, {color: theme.colors.text}]}>Miles</Text>
            <RadioButton
              value="miles"
              status={unit === 'miles' ? 'checked' : 'unchecked'}
              onPress={() => setUnit('miles')}
              color={theme.colors.text}
            />
          </View>
        </View>
      </View>
    </PaperProvider>
  )
}
