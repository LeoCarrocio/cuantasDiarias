import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import UserForm from './component/UserForm'

export default Loguin =()=>{
  const navegation = useNavigation();


  return(
    <ScrollView >
      <Image 
        source={require('../../../assets/img/user_loguin.png')} 
        resizeMode='contain'
        style={styles.imagenUsuario}
      />
      <View>
        <UserForm />
      </View>
      <View style={styles.viewContainer}>
        <CrearCuenta />
        <OlvideMiUsuario/>

      </View>
      

    </ScrollView>
  )

}

const CrearCuenta = ()=>{
  const navegation = useNavigation();

  return(
    <Text style={styles.textCrearCuente}
      onPress={()=>navegation.navigate("NewUsuario")}
    >
      Crear cuenta
    </Text>
  )
}
const OlvideMiUsuario = ()=>{
  return(
    <Text style={styles.textCrearCuente}
      onPress={()=>console.log('olvide mi usuario')}
    >
      Olvide mi usuario
    </Text>
  )
}



const styles = StyleSheet.create({
  imagenUsuario:{
    height: 100,
    width: "100%",
    marginTop: 100,
  },
  viewContainer:{
    alignItems:'center',
    marginRight: 40,
    marginLeft: 40,
  },
  textCrearCuente:{
    marginTop:15
  },
  btnStyle:{
    height: 48,
    marginTop: 30,
    paddingTop: 10,
    backgroundColor:"#FF7141",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnTituloStyle:{
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 4,
    textAlign:'center'
  }
})