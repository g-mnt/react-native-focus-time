import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 50,
    title,
    onPress
}) => (
    <TouchableOpacity onPress={onPress} style={[styles(size).button, style]}>
        <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
)

const styles = (size) => ({
    button: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        borderWidth: 2
    },
    text: {
        color: colors.white, fontSize: size / 2.7
    }

})