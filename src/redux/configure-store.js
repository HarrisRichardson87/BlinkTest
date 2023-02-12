import { configureStore } from '@reduxjs/toolkit'
import shapeSlice from '../components/Game/Board/Shapes/ShapeSlice';
const initialState = { index: 0 }; // Shape target type index
export default configureStore({
  reducer: {
    shape: shapeSlice,
    rootReducer:(state = initialState, action) =>{
      return state;
    }
  },
  preloadedState: initialState 
})
