import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Button, Input,Icon} from 'react-native-elements';



export default NewUserForm = ()=>{
  const [showPassword,setShowPassword] = useState(false);
  const [showPasswordRepet, setShowPasswordRepet]= useState(false);
  const [formData, setFormData]= useState({});

  return(
    <View style={styles.viewContainer}> 
      <Input 
        containerStyle= {styles.containerStyle}
        placeholder='MAIL'
        rightIcon={
          <Icon
            name='at'
            type='material-community'
            iconStyle={styles.iconRight}
            onPress={() => console.log('hello')} />
        }
      />
      <Input
        containerStyle= {styles.containerStyle}
        placeholder='CONTRASEÑA'
        password={true}
        secureTextEntry={showPassword? false : true}
        rightIcon={
          <Icon
            name={showPassword ?'eye':'eye-off'}
            type='material-community'
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword) } />
        }
      />
      <Input
        containerStyle= {styles.containerStyle}
        placeholder='REPETIR CONTRASEÑA'
        password={true}
        secureTextEntry={showPasswordRepet? false : true}
        rightIcon={
          <Icon
            name={showPasswordRepet ?'eye':'eye-off'}
            type='material-community'
            iconStyle={styles.iconRight}
            onPress={() => setShowPasswordRepet(!showPasswordRepet) } />
        }
      />
      <Button 
          title="CREAR"
          titleStyle={styles.btnTituloStyle}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}       
          // onPress={()=>console.log('ingresar')}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  viewContainer:{
    marginTop:70, 
    marginLeft:70,
    marginRight:70
  },
  containerStyle:{
    width:'100%',
  },
  iconRight:{
    color:"#FF7141",
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
  }
})
