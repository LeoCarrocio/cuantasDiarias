import React,{useState, useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerUsuario} from '../../redux/usuarioDucks'

//view
import Ingresar from './Ingresar';
import UsuarioLogueado from './UsuarioLogueado';



export default Home = () =>{
  const [loguin ,setLoguin]=useState(null);
  const dispatch = useDispatch();
  const user = useSelector(store => store.usuario.user)
  // console.log(user);
  
  useEffect(()=>{
    dispatch(obtenerUsuario())
      .then(res =>{
        !res? setLoguin(false) : setLoguin(true)
        console.log('res==============>',res)
        console.log('usuario=>',user)
      } )
    

  },[])


  if(loguin === null) return <Text>Cargando... </Text>


  return loguin ? <UsuarioLogueado />: <Ingresar />;
  
}
