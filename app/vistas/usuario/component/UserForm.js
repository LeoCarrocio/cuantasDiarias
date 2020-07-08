import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default UserForm = ()=>{
  return(
    <View style={styles.viewContainer}> 
      <Input
        inputContainerStyle={styles.stylesIntup} 
        // containerStyle= {styles.containerStyle}
        placeholder='MAIL'
      />
      <Input
        placeholder='CONTRASEÑA'
      />
      <Button 
          title="INGRESAR"
          titleStyle={styles.btnTituloStyle}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}       
          onPress={()=>console.log('ingresar')}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  viewContainer:{
    marginTop:50, 
    marginLeft:50,
    marginRight: 30
  },
  containerStyle:{
    width:'100%',
    borderColor:"#FF7141",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  btnStyle:{
    height: 48,
    marginTop: 25,
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
  },
  
  
  
  
  stylesIntup:{
    borderTopWidth:0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    height: 70,
    borderColor:'#FF7141',

    borderRadius:30,
    
  
//     shadowColor: "#FF5733",
// shadowOffset: {
// 	width: 100,
// 	height: 12,
// },
// shadowOpacity: 0.58,
// shadowRadius: 16.00,

// elevation: 24,
padding:20,
    backgroundColor:'#d9d9d9',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
})

