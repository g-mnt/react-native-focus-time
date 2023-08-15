import React from "react"
import { StyleSheet, View } from "react-native"
import { RoundedButton } from "../components/RoundedButton"

export const Timing = ({changeTime}) => {
    
    return (
        <View style={styles.container}>
            <RoundedButton size={90} title={'10'} onPress={() => { changeTime(10) }}/>
            <RoundedButton size={90} title={'20'} onPress={() => { changeTime(20) }}/>
            <RoundedButton size={90} title={'30'} onPress={() => { changeTime(30) }}/>
            <RoundedButton size={90} title={'40'} onPress={() => { changeTime(40) }}/>
            <RoundedButton size={90} title={'50'} onPress={() => { changeTime(50) }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        columnGap: 30,
        rowGap: 10
    }
})