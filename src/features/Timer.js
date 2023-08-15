import React, { useState } from 'react'
import {View, Text, StyleSheet, Vibration} from 'react-native'
import { Countdown } from '../components/Countdown'
import { fontSizes, spacing } from '../utils/sizes'
import { RoundedButton } from '../components/RoundedButton'
import { colors } from '../utils/colors'
import { ProgressBar } from 'react-native-paper'

export const Timer = ({
    currentItem,
    clearItem
}) => {
    const [isPaused, setIsPaused] = useState(true)
    const [initialTime, setInitialTime] = useState(0.2)
    const [progress, setProgress] = useState(initialTime)

    const handleEnd = () => {
        Vibration.vibrate();
        clearItem();
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdownContainer}>
                <Countdown minutes={initialTime} isPaused={isPaused} onEnd={handleEnd} onProgress={setProgress} />
                <View style={styles.focusingContainer}>
                    <Text style={styles.focusTitle}>Focusing on:</Text>
                    <Text style={styles.focusItem}>{currentItem}</Text>
                </View>
            </View>
            <View style={styles.progressBarContainer}>
                <ProgressBar style={styles.progressBar} progress={progress} />
            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton size={100} title={isPaused ? 'Start' : 'Stop'} onPress={() => {setIsPaused((isPaused) => !isPaused)}}/> 
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    countdownContainer: {
        flex:0.4,
        margin: spacing.lg
    },
    focusingContainer: {
        paddingVertical: spacing.xxl,
        alignItems: 'center'
    },  
    focusTitle: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
    },
    focusItem: {
        marginTop: spacing.sm,
        fontSize: fontSizes.md,
        color: colors.white
    },
    buttonContainer: {
        flex:0.3,
        margin: spacing.xxl,
        alignItems: 'center'
    },
    progressBarContainer: {
        paddingVertical: spacing.xxl,
    },
    progressBar:{
        height: 9,
    }
})