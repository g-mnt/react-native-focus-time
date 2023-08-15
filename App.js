import { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform,  StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';

export default function App() {
  const [item, setItem] = useState(null)

  return (
    <SafeAreaView style={styles.safeArea}>
      {!item ? 
        <Focus addItem={setItem}/> : 
        <Timer currentItem={item} clearItem={() => {setItem(null)}} />
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
});
