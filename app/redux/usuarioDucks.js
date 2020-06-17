
import * as firebase from 'firebase';

// CONSTANTES

const OBTENER_USUARIO = 'OBTENER_USUARIO';



//  REDUCER

const initialState = {
  user:{},
}

export default usuarioReducer = (state = initialState, action) =>{
  switch(action.type){
    case OBTENER_USUARIO:
      return{...state, user: action.payload }
    default:
      return state;
  }
}


// ACCIONES

export const obtenerUsuario = () => async(dispach, getState) =>{
  
  try{
    const res = await firebase.auth().onAuthStateChanged((user)=>{
      dispach({
        type: OBTENER_USUARIO,
        payload: user
      })
    })

  }catch(error){
    console.log(error);
  }
  
}



