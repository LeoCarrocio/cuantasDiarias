import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../vistas/usuario/Home';
import Loguin from '../vistas/usuario/Loguin';
import NewUsuario from '../vistas/usuario/NewUsuario';

const Stack = createStackNavigator();

export default UsuarioStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"HOME"}}
      />
      <Stack.Screen
        name="Loguin"
        component={Loguin}
        options={{title:"LOGUIN"}}
      />
       <Stack.Screen
        name="NewUsuario"
        component={NewUsuario}
        options={{title:"NUEVO USUARIO"}}
      />

    </Stack.Navigator>
  )
}
