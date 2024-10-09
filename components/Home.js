import { FlatList, SafeAreaView, View } from "react-native";
import { Avatar, Card, Chip, PaperProvider, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import Context from "./Context";

export default function Home() {

    const { unit, setUnit } = useContext(Context)


    const calculateTotalDistances = (workout) => {
        const totals = { walk: 0, run: 0, swim: 0 }

        workout.forEach(item => {
            if (item.distance) {
                totals[item.category] += parseFloat(item.distance)
            }
        })

        return totals
    }

    function convertDistances(distance) {
        return (
            unit === 'miles' ? (distance * 0.621371).toFixed(2) : distance
        )
    }

    const { workout, setWorkout } = useContext(Context)
    const theme = useTheme()
    const totalDistances = calculateTotalDistances(workout)

    return (
        <PaperProvider>
            <SafeAreaView style={[Styles.container, { backgroundColor: theme.colors.background }]}>
                <Text variant="displaySmall" style={[Styles.header, { color: theme.colors.text }]}>Your workouts</Text>
                <View style={Styles.workoutIcons}>
                    <Chip icon='walk' mode="outlined" style={Styles.chip}><Text style={Styles.text}>{totalDistances.walk ? convertDistances(totalDistances.walk) : "0"}{unit}</Text></Chip>
                    <Chip icon='run' mode="outlined" style={Styles.chip}><Text style={Styles.text}>{totalDistances.run ? convertDistances(totalDistances.run) : "0"}{unit}</Text></Chip>
                    <Chip icon='swim' mode="outlined" style={Styles.chip}><Text style={Styles.text}>{totalDistances.swim ? convertDistances(totalDistances.swim) : "0"}{unit}</Text></Chip>
                </View>
                <FlatList

                    data={workout}
                    renderItem={({ item }) => <Item item={item} unit={unit} convertDistances={convertDistances} />}
                    keyExtractor={item => item.selectedDate}
                />
            </SafeAreaView>
        </PaperProvider>
    )
}

function Item({ item, unit, convertDistances }) {

    const capitalizeCategoryFont = item.category.charAt(0).toUpperCase() + item.category.slice(1);

    return (
        <Card style={Styles.card}>
            <Card.Title
                titleVariant="titleLarge"
                title={capitalizeCategoryFont + " " + '(' + item.selectedDate + ')'}
                left={props => <Avatar.Icon icon={item.category} size={40} />}
            />
            <Card.Content >
                <Text >Distance: {convertDistances(item.distance)} {unit}</Text>
                <Text >Duration: {item.duration} min</Text>
            </Card.Content>
        </Card>
    )
}

