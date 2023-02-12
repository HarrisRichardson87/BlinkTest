import { createSlice } from '@reduxjs/toolkit'
import history from '../../../../redux/history';
import { ShapeTypes } from './ShapeTypes';
export const shapeSlice = createSlice({
  name: 'shapeSlice',
  initialState: {
    index: 0, // here I would change the type in the Game component, and subscribe it, here is an example
  },
  reducers: {
    success: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // Move target to the next shape, user has successfully connected them
      state.index += 1;

      // Push to success page if they have three successful turns
      if(state.index == 3){
        history.push("/results");
        history.go(0);
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { success } = shapeSlice.actions

export default shapeSlice.reducer