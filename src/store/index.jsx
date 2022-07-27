

import { configureStore } from '@reduxjs/toolkit'
import userName from './slices/userName.slice'
import idNameSlice from './slices/idName.slice'




export default configureStore({
  reducer: {
    user: userName,
    idName: idNameSlice
	}
})
