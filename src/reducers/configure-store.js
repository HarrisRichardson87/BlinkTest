import { configureStore } from '@reduxjs/toolkit'
import { myAction, pusher } from './reducers'
export default configureStore({
  reducer: {
    pusher:pusher
  }
})