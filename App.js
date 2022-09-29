import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar, LogBox } from 'react-native';
import AuthProvider from './src/contexts/auth';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

import Routes from './src/routes/index';

export default function App() {
   return (
      <NavigationContainer>
         <AuthProvider>
            <StatusBar backgroundColor="#131313" barStyle="light-content" />
            <Routes />
         </AuthProvider>
      </NavigationContainer>
   );
}