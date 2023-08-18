import { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform,  StatusBar, View } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [item, setItem] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAddHistory = (itemFocused) => {
    setHistory((prev) => [itemFocused, ...prev]);
    setItem(null);
  }

  const handleClear = () => {
    setItem(null);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {!item ? 
        <>
          <Focus addItem={setItem} /> 
          <FocusHistory history={history} />
        </>
        : 
        <Timer currentItem={item} clearItem={handleClear} addToHistory={handleAddHistory} />
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
