
import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',// Cambialo por el nombre de tu slice
    initialState: '',//Como lo dice su nombre, es el valor inicial del estado. Puede ser cualquier tipo de dato (número, string, booleano, objeto, arreglo…).
    reducers: {//colocaremos los actions, es decir, las funciones que nos permitiran modificar el estado.
      getName: ( state, action)=>{
        return action.payload
      }

    }
    //const counter = useSelector(state => state.counter) para acceder a un estado
})

export const { getName } = userNameSlice.actions;

export default userNameSlice.reducer;