import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from '../vistas/menu/Menu';

const Stack = createStackNavigator();

export default MenuStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{title:"MENU"}}
      />
    </Stack.Navigator>
  )
}
