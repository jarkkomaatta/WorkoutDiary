import { useContext, useState } from "react"
import { Alert, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Calendar } from "react-native-calendars"
import { BottomNavigation, Button, PaperProvider, SegmentedButtons, Text, TextInput, Title, ToggleButton, useTheme } from 'react-native-paper'
import Styles from "../styles/Styles"
import Context from "./Context"

const categories = ['walk', 'run', 'swim']

export default function Add() {

  const [category, setCategory] = useState(categories[0])
  const [distance, setDistance] = useState(null)
  const [duration, setDuration] = useState(null)
  const [selectedDate, setSelecetedDate] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const { workout, setWorkout } = useContext(Context)
  const theme = useTheme()
  const [alertVisible, setAlertVisible] = useState(false)
  const { unit, setUnit } = useContext(Context)

  const kmToMiles = (km) => (km * 0.621371).toFixed(2);
  const milesToKm = (miles) => (miles * 1.60934).toFixed(2)




  const DaySelected = (day) => {
    setSelecetedDate(day.dateString)
    setCalendarVisible(false)
  }

  function addWorkout() {

    let storedDistance = parseFloat(distance)

    if (unit === "miles") {
      storedDistance = parseFloat(milesToKm(storedDistance))
    }

    const modified = [...workout, { category, distance: storedDistance, duration: parseFloat(duration), selectedDate }]
    setWorkout(modified)
    setCategory(categories[0])
    setDistance(null)
    setDuration(null)
    setSelecetedDate(null)

    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false)
    }, 5000)

  }

  const checkWrongNumber = (text, setState) => {
    if (text.includes('-')) {
      Alert.alert('Invalid mark " - "')
    } else {
      if (text.startsWith('.')) {
        Alert.alert('You cannot start with dot')
      } else {
        setState(text);
      }
    }
  }

  return (
    <PaperProvider>
      <View style={Styles.container}>
        <Text variant="displaySmall" style={[Styles.header, { color: theme.colors.text }]}>Select workout</Text>
        <CategorySelection style={Styles.chip} value={category} setValue={setCategory} values={categories} />
        <TextInput style={{ margin: 10 }}
          label={`Distance (${unit})`}
          value={distance}
          onChangeText={text => checkWrongNumber(text, setDistance)}
          keyboardType='numeric'
        />
        <TextInput style={{ margin: 10 }}
          label={'Duration (min)'}
          value={duration}
          onChangeText={text => checkWrongNumber(text, setDuration)}
          keyboardType='numeric'
        />
        <TouchableOpacity onPress={() => setCalendarVisible(true)}>
          <TextInput
            style={{ margin: 10 }}
            label="Select Date"
            value={selectedDate}
            editable={false}
            right={<TextInput.Icon icon="calendar" />}
          />
        </TouchableOpacity>

        <Modal visible={calendarVisible} animationType='slide' transparent={true} onRequestClose={() => setCalendarVisible(false)}>
          <View style={Styles.modalContainer}>
            <View style={Styles.calendarContainer}>
              <Calendar onDayPress={DaySelected} markedDates={{ [selectedDate]: { selected: true } }}
              />
            </View>
          </View>
        </Modal>
        <Button mode="contained" style={[Styles.button, { backgroundColor: theme.colors.text }]} onPress={addWorkout}>Submit workout</Button>

        {alertVisible && (
          <View style={[Styles.button, { backgroundColor: theme.colors.secondaryContainer }]}>
            <Text style={[Styles.alertText, { color: theme.colors.onSecondaryContainer }]}>
              Workout added successfully!
            </Text>
          </View>
        )}

      </View>
    </PaperProvider>
  )
}

function CategorySelection({ value, setValue, values }) {

  const theme = useTheme()

  return (
    <View style={[Styles.categories, { backgroundColor: theme.colors.text }]}>
      <SegmentedButtons value={value} onValueChange={setValue}
        buttons={[
          { value: 'walk', label: 'Walking', icon: 'walk' },
          { value: 'run', label: 'Run', icon: 'run' },
          { value: 'swim', label: 'Swim', icon: 'swim' }
        ]}
      />
    </View>
  )
} 