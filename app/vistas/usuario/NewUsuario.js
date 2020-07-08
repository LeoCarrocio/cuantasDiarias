import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import NewUserForm from './component/NewUserForm';



export default NewUsuario = () =>{
  return(
    <KeyboardAwareScrollView>
      <View style={styles.containerNewUsuario}>
        <NewUserForm/>
      </View>

    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  containerNewUsuario:{
    flex:1,
    // alignContent:"center",
    // marginLeft: 50,
    // marginRight: 50,

    
  },
})