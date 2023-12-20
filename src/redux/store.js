import { configureStore } from '@reduxjs/toolkit'
import AppSlice from './slices/app'

export const store = configureStore({
  reducer: {
    AppSlice
  }
})