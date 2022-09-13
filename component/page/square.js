import react from "react";
import { Text } from "react-native";
export default function Square({ color }) {
    return (
        <Text style={{ backgroundColor: color, padding: 10, margin: 5 }}>
            Square
        </Text>
    )
}