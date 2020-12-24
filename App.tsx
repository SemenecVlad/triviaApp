import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartScreen from './src/Screens/Start';
import QuestionsScreen from './src/Screens/Questions';
import ResultsScreen from './src/Screens/Results';
import store from "./src/Store";

const Stack = createStackNavigator();

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen" headerMode="none">
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
            <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
