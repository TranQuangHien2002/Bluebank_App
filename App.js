// import AppLaunch from './component/AppLaunch'
// export default AppLaunch

// import GetStarted from './component/GetStarted'
// export default GetStarted

// import Login from './component/Login.js'
// export default Login

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import GetStarted from './component/GetStarted'
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
