import React,{useState, useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerUsuario} from '../../redux/usuarioDucks'

//view
import Loguin from './Loguin';
import UsuarioLogueado from './UsuarioLogueado';



export default Home = () =>{
  const [loguin ,setLoguin]=useState(null);
  const dispatch = useDispatch();
  const user = useSelector(store => store.usuario.user)
  console.log(user);
  
  useEffect(()=>{
    let res = dispatch(obtenerUsuario())
    console.log('---------------------------------------',res)
    !user? setLoguin(false) : setLoguin(true);

  },[])


  if(loguin === null) return <Text>Cargando... </Text>


  return loguin === undefined ? <Loguin />:<UsuarioLogueado />;
  
}
