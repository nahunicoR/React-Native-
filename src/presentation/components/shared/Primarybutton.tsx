import { Text, Pressable, StyleSheet, Platform } from "react-native"
import { useCounter } from "../../hooks/useCounter"


interface Props {
    children?: string;
    onPress: () => void;
    onLongPress: () => void;
}



export const Primarybutton = ({ children = 'Default', onPress, onLongPress }: Props) => {

    return (
        <Pressable
            style={({ pressed }) => [
                styles.buttonPlus,
                pressed && styles.buttonPressed
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >

            <Text style={{ color: 'white' }}>{children}</Text>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    buttonPlus: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: '#4746AB',

    }
})