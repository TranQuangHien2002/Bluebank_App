// // App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import GetStarted from './component/GetStarted';
import Onboarding_Step1 from './component/Onboarding_Step1';
import Onboarding_Step2 from './component/Onboarding_Step2';
import Onboarding_Step3 from './component/Onboarding_Step3';
import Onboarding_Step4 from './component/Onboarding_Step4';
import Onboarding_Step5 from './component/Onboarding_Step5';
import PersonalDetails from './component/PersonalDetails';
import Pay1 from './component/Pay1';
import Pay2 from './component/Pay2';
import Pay3 from './component/Pay3';
import Pay4 from './component/Pay4';

import MainScreenComponent from './component/MainScreenComponent'; // Removed '.js'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainScreenComponent" component={MainScreenComponent} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Onboarding_Step1" component={Onboarding_Step1} />
        <Stack.Screen name="Onboarding_Step2" component={Onboarding_Step2} />
        <Stack.Screen name="Onboarding_Step3" component={Onboarding_Step3} />
        <Stack.Screen name="Onboarding_Step4" component={Onboarding_Step4} />
        <Stack.Screen name="Onboarding_Step5" component={Onboarding_Step5} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Pay1" component={Pay1} />
        <Stack.Screen name="Pay2" component={Pay2} />
        <Stack.Screen name="Pay3" component={Pay3} />
        <Stack.Screen name="Pay4" component={Pay4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// import HomeScreen  from "./component/Pay1";
// export default HomeScreen