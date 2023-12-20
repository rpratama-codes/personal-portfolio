import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'app',
	initialState: {
		project: undefined
	},
	reducers: {
		setProject: (state, actions) => {
			state.project = actions.payload
		}
	}
})

export const { setProject } = counterSlice.actions
export default counterSlice.reducer;