import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewIngreso from '../vistas/gastosIngresos/NewIngreso';
import NewGasto from '../vistas/gastosIngresos/NewGasto';

const Stack = createStackNavigator();

export default GastosIngresoStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="NewIngreso"
        component={NewIngreso}
        options={{title:"NUEVO INGRESO"}}
      />
      <Stack.Screen
        name="NewGasto"
        component={NewGasto}
        options={{title:"NUEVO GASTO"}}
      />
    </Stack.Navigator>
  )
}