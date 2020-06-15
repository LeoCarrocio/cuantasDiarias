import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import UsuarioStack from '../navegacion/UsuarioStack';
import MenuStack from '../navegacion/MenuStack';
import GastosIngresoStack from '../navegacion/GastosIngresosStack';


const Tab = createBottomTabNavigator();

export default Navigation = ()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={UsuarioStack}
          options={{title:"Home"}}
        />
        <Tab.Screen 
          name="GastosIngresoStack" 
          component={GastosIngresoStack}
          options={{title:"opciones"}}
        />
        <Tab.Screen 
          name="Menu" 
          component={MenuStack}
          options={{title:"Menu"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

