import { StyleSheet, Text, View } from "react-native";
import { Primarybutton } from "../components";
import { useCounter } from "../hooks/useCounter";
import { Button } from "react-native-paper";

export const CounterScreen = () => {
    const { counter, increment, reset } = useCounter(0)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{counter}</Text>


            {/* <Primarybutton
                children="Incrementar"
                onLongPress={reset}
                onPress={increment}
            /> */}
            {/* <Button>
                Incrementar
            </Button> */}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
})
