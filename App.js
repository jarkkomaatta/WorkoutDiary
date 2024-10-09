import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BottomNavigation, MD3LightTheme, PaperProvider, SegmentedButtons, Text, TextInput, Title } from 'react-native-paper';
import Styles from './styles/Styles';
import Home from './components/Home';
import Add from './components/Add';
import Context from './components/Context';
import Settings from './components/Settings';

const routes = [
  { key: 'home', title: 'Home', focusedIcon: 'home' },
  { key: 'add', title: 'Add', focusedIcon: 'plus' },
  { key: 'settings', title: 'Settings', focusedIcon: 'account-settings' }
]

const renderScene = BottomNavigation.SceneMap({
  home: Home,
  add: Add,
  settings: Settings
})

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#14f500',
    secondary: '#000000',
    background: '#c4d4e9',
    text: '#1900fd',
    surface: '#e100ff',
    background2: '#021af1',
    container: '#ffffff',
    navbackground: '#aab9fc'
  },
};

export default function App() {

  const [unit, setUnit] = useState('km')

  const existingWorkouts = [
    { category: 'run', distance: '5', duration: '30', selectedDate: '2024-09-18' },
    { category: 'walk', distance: '2.5', duration: '20', selectedDate: '2024-09-19'},
    { category: 'swim', distance: '1', duration: '60', selectedDate: '2024-09-20'}
  ];

  const [index, setIndex] = useState(0)
  const [workout, setWorkout] = useState(existingWorkouts)
  // console.log(workout);
  

  return (
    <PaperProvider theme={theme}>
      <Context.Provider value={{workout, setWorkout, unit, setUnit}} >
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{ backgroundColor: theme.colors.navbackground, borderWidth: 2}}
          activeColor={theme.colors.text}
          inactiveColor={theme.colors.secondary}
        />
      </Context.Provider>
    </PaperProvider>
  )
}