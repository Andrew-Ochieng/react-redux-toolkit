import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  // store(initial state)
  name: 'count',
  initialState: {
    count: 0
  },
  reducers: {
    // actions
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    incrementAmountBy: (state, action) => {
        state.count += action.payload
    },
    decrementAmountBy: (state, action) => {
        state.count -= action.payload
    }
  }
})

export const { increment, decrement, incrementAmountBy, decrementAmountBy } = counterSlice.actions

export default counterSlice.reducer