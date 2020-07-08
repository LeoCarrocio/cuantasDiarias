import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

// import Button from '../../componentes/Button';

export default Ingresar = () =>{
  const navegation = useNavigation();

  return(
    <ScrollView centerContent={true} style={styles.vistaBody}>
      <Image 
        source={require('../../../assets/img/logo.png')} 
        resizeMode='contain'
        style={styles.imagenLogo}
      />
      <View style={styles.containerBtn}>
        <Button 
          title="INGRESAR"
          titleStyle={styles.btnTituloStyle}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}       
          onPress={()=>navegation.navigate('Loguin')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  vistaBody:{
    marginLeft: 30,
    marginRight: 30
  },
  imagenLogo:{
    height: 200,
    width: "100%",
    marginBottom: 20,
  },
  containerBtn:{
    flex:1,
    alignItems:"center",
  },
  btnContainer:{
    width:'70%'
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