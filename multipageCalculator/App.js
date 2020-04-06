import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';

  const AppNavigator = createStackNavigator({
    Calculator: {screen: CalculatorScreen},
    History: {screen: HistoryScreen}, 
  });

  const AppContainer =  createAppContainer(AppNavigator);
  
  export default function App() {
    return ( 
      <AppContainer/>
    );
}

