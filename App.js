// // import AppLaunch from './component/AppLaunch'
// // export default AppLaunch

// import Onboarding_Step4 from './component/Onboarding_Step5'
// export default Onboarding_Step4


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import GetStarted from './component/GetStarted'
import Onboarding_Step1 from './component/Onboarding_Step1'
import Onboarding_Step2 from './component/Onboarding_Step2'
import Onboarding_Step3 from './component/Onboarding_Step3'
import Onboarding_Step4 from './component/Onboarding_Step4'
import Onboarding_Step5 from './component/Onboarding_Step5'
import PersonalDetails from './component/PersonalDetails';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Onboarding_Step1" component={Onboarding_Step1} />
        <Stack.Screen name="Onboarding_Step2" component={Onboarding_Step2} />
        <Stack.Screen name="Onboarding_Step3" component={Onboarding_Step3} />
        <Stack.Screen name="Onboarding_Step4" component={Onboarding_Step4} />
        <Stack.Screen name="Onboarding_Step5" component={Onboarding_Step5} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
