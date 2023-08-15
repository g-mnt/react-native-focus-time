import React, { useState } from "react"
import {View, StyleSheet, Dimensions} from 'react-native'
import { TextInput } from "react-native-paper"
import { RoundedButton } from "../components/RoundedButton"
import { spacing } from "../utils/sizes"

export const Focus = ({addItem}) => {
    const [item, setItem] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    label="What would you like to focus on?" 
                    onChangeText={setItem} 
                />
                <RoundedButton title={'+'} onPress={() => {addItem(item)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        paddingVertical: spacing.xl,
        paddingHorizontal: spacing.lg,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    input: {
        flex:1,
        marginRight: spacing.md
    }
})