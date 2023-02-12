import { configureStore } from '@reduxjs/toolkit'

import shapeSlice from '../components/Game/Board/Shapes/ShapeSlice';
import history from './history';
export default configureStore({
  reducer: {
    shape: shapeSlice
  }, 
  history: history
})