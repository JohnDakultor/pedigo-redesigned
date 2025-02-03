import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { AppContext } from '../utils/appContext';
import introPage from '../screen/startingScreen';

// Create the context outside of the component

type AppContextType = {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const appContextValue = useMemo<AppContextType>(
    () => ({
      isSignedIn,
      setIsSignedIn,
    }),
    [isSignedIn]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      {/* <NavigationContainer> */}
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen
            name="Intro"
            component={introPage}
            options={{ headerShown: false }}
          />
         
        </Stack.Navigator>
      {/* </NavigationContainer> */}
    </AppContext.Provider>
  );
};

export default App;
