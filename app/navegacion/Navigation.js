import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import UsuarioStack from '../navegacion/UsuarioStack';
import MenuStack from '../navegacion/MenuStack';
import GastosIngresoStack from '../navegacion/GastosIngresosStack';


const Tab = createBottomTabNavigator();

export default Navigation = ()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator  
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor:"#7a7a7c",
          activeTintColor:"#0f0f0f"
        }}
        screenOptions={({route})=>({
          tabBarIcon:({color})=>screenOptions(route,color)
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={UsuarioStack}
          options={{title:"Home"}}
        />
        <Tab.Screen 
          name="GastosIngresoStack" 
          component={GastosIngresoStack}
          options={{title:"Opciones"}}
        />
        <Tab.Screen 
          name="Menu" 
          component={MenuStack}
          options={{title:"Menu"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route,color)=>{
  let iconName;

    switch(route.name){
      case "Home":
        iconName ="home"
        break;
      case "GastosIngresoStack":
        iconName = "plus"
        break;
      case "Menu":
        iconName ="menu"
        break;
    }
    return(
      <Icon type="material-community" name={iconName} color={color}/>
    )


}