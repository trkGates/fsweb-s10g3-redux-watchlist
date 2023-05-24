import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sira: 0,
}

export const siraSlice = createSlice({
    name: 'sira',
    initialState,
    reducers: {
        sonrakiFilm: (state) => {
            state.sira += 1
        }
    }
})

export const { sonrakiFilm } = siraSlice.actions

export default siraSlice.reducer