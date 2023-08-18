import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

export const FocusHistory = ({history}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Focus History</Text>
            <FlatList data={history} 
                renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.item}>{item.title} - {item.timeFocused} minutes</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                )} 
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>You haven't focused on anything yet.</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        rowGap: spacing.md,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.lg
    },
    title: {
        fontSize: fontSizes.xl,
        fontWeight: "bold",
        color: colors.white
    },
    itemContainer:{
        paddingVertical: spacing.md
    },
    item: {
        color:colors.white,
        fontSize: fontSizes.md
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: colors.historyDivisor,
    },
    emptyText: {
        color: colors.white,
        fontSize: fontSizes.md
    }
})