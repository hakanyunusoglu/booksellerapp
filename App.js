import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './src/pages/Books'
import CartScreen from './src/pages/Carts'
import CartIcon from './src/component/CartIcon'
import { BookSellerProvider } from '.';
const Stack = createStackNavigator();

export default function App() {
  return (
    <BookSellerProvider>    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Books" component={BookScreen} 
        options={{
          headerRight:()=><CartIcon/>,
          title:"Kitap"
        }}
      />
      <Stack.Screen name="Carts" component={CartScreen}
      //options={{headerTintColor:"red"}} 
      />
    </Stack.Navigator>
    </NavigationContainer>
    </BookSellerProvider>

  );
}