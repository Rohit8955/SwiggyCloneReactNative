import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './src/Components/SearchBar';
import HomeNavigator from './src/navigations/HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar/>
        <HomeNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});